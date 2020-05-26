import React from 'react';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ message, setMessage, sendMessage }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Type a message'
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button></button>
    </form>
  );
};

export default Input;
