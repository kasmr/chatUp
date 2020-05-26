import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import Dashboard from './dashboard/Dashboard';

interface IMessages {
  user: string;
  text: string;
}

export type Tstate = string | string[] | null | undefined;

let socket: any;

const Chat: React.FC<RouteComponentProps> = ({ location }) => {
  const [name, setName] = useState<Tstate>('');
  const [room, setRoom] = useState<Tstate>('');
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

  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(messages, message);

  return (
    <div>
      <div></div>
      <Dashboard
        room={room}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
