import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import Input from '../messages/Input';
import Dashboard from '../dashboard/Dashboard';
import Messages from '../messages/Messages';
import { makeStyles } from '@material-ui/core/styles';

export interface IMessages {
  user: string;
  text: string;
}

export interface IUsers {
  id: number;
  room: string;
  name: string;
}

let socket: any;

const Chat: React.FC<RouteComponentProps> = ({ location }) => {
  const classes = useStyles();

  const [name, setName] = useState<string | null | undefined>('');
  const [room, setRoom] = useState<string | null | undefined>('');
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<IUsers[]>([]);
  const ENDPOINT: string = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name?.toString());
    setRoom(room?.toString());

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

    socket.on('roomData', ({ users }: { users: IUsers[] }) => {
      setUsers(users);
    });
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

  return (
    <div className={classes.container}>
      <div className={classes.container__dashboard}>
        <Dashboard name={name} room={room} users={users} />
      </div>
      <div className={classes.container__chat}>
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

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
  },
  container__chat: {},
  container__dashboard: {
    width: '30%',
    backgroundColor: theme.palette.primary.main,
  },
  subTitle: {
    marginBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));
