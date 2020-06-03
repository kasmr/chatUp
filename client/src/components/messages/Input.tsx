import React from 'react';
import { Button, Input as MInput } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

interface Props {
  message: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  sendMessage: (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Input: React.FC<Props> = ({
  message,
  onChange,
  onKeyPress,
  sendMessage,
}) => {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        type='text'
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton
        color='primary'
        className={classes.iconButton}
        aria-label='directions'
        onClick={(e) => sendMessage(e)}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default Input;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '70%',
      position: 'fixed',
      bottom: 0,
      [theme.breakpoints.down('sm')]: {
        width: '60%',
      },
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);
