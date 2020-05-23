import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

interface Props {}

let socket;

const Chat: React.FC<RouteComponentProps> = ({ location }) => {
  const [chat, setChat] = useState({});
  const ENDPOINT: string = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setChat({ name, room });

    socket.emit('join', { name, room }, ({ error }: { error: string }) => {
      alert(error);
    });
  }, [ENDPOINT, location.search]);

  return <div>Chat</div>;
};

export default Chat;
