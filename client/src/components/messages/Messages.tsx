import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { IMessages, TChat } from '../chat/Chat';
import Message from './Message';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  messages: IMessages[];
  name: TChat;
}

const Messages: React.FC<Props> = ({ messages, name }) => {
  const classes = useStyles();

  return (
    <ScrollToBottom className={classes.root}>
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '95vh',
    [theme.breakpoints.down('sm')]: {
      height: '93vh',
    },
  },
}));
