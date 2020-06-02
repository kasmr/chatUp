import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { IMessages } from '../chat/Chat';
import Message from './Message';

interface Props {
  messages: IMessages[];
  name: string | null | undefined;
}

const Messages: React.FC<Props> = ({ messages, name }) => {
  return (
    <ScrollToBottom>
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
