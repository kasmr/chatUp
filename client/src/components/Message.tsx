import React from 'react';
import { IMessages } from './Chat';

interface Props {
  name: string | string[] | null | undefined;
  message: IMessages;
}

const Message: React.FC<Props> = ({ name, message: { user, text } }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name?.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <p>{text}</p>
      </div>
      <p>{user}</p>
    </div>
  );
};

export default Message;
