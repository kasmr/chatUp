import React from 'react';
import { Button, Input as MInput } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

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
    <form className={classes.form}>
      <MInput
        className={classes.input}
        type='text'
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        endIcon={<SendIcon />}
        onClick={(e) => sendMessage(e)}
      >
        send
      </Button>
    </form>
  );
};

export default Input;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      width: '100%',
      position: 'fixed',
      bottom: 5,
      margin: 'auto 1rem',
    },
    input: {
      width: '60%',
    },
    button: {
      margin: theme.spacing(1),
      width: '7%',
    },
  })
);
