import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import Input from './Input';
import Dashboard from './dashboard/Dashboard';
import Messages from './Messages';

export interface IMessages {
  user: string;
  text: string;
}

let socket: any;

const Chat: React.FC<RouteComponentProps> = ({ location }) => {
  const [name, setName] = useState<string | string[] | null | undefined>('');
  const [room, setRoom] = useState<string | string[] | null | undefined>('');
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [message, setMessage] = useState('');
  const ENDPOINT: string = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');

      socket.disconnect();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message: IMessages) => {
      setMessages((messages) => [...messages, message]);
    });

    // socket.on('roomData', ({users}) => {
    //   setUsers(users)
    // })
  }, []);

  const sendMessage = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  console.log(messages, message);

  return (
    <div>
      <div>
        <Dashboard room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
