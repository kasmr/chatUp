import React from 'react';
import { IMessages } from '../chat/Chat';
import ReactEmoji from 'react-emoji';
import Avatar from '@material-ui/core/Avatar';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  name: string | null | undefined;
  message: IMessages;
}

const Message: React.FC<Props> = ({ name, message: { user, text } }) => {
  const classes = useStyles();

  let isSentByCurrentUser = false;

  const trimmedName = name?.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={classes.messageRight}>
      <Paper className={classes.paperRight}>
        <Typography
          className={classes.author}
          variant='caption'
          display='block'
          color='textSecondary'
        >
          {`~${trimmedName}`}
        </Typography>

        {ReactEmoji.emojify(text)}
      </Paper>
    </div>
  ) : (
    <div className={classes.message}>
      <Paper className={classes.paperLeft}>
        <Typography
          className={classes.author}
          variant='caption'
          display='block'
          color='textSecondary'
        >
          {`~${user}`}
        </Typography>

        {ReactEmoji.emojify(text)}
      </Paper>
    </div>
  );
};

export default Message;

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '1rem',
  },
  messageRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    margin: '1rem',
  },
  paperRight: {
    padding: '1rem',
    borderRadius: '20px 20px 0 20px',
    wordBreak: 'break-word',
    maxWidth: '50%',
  },
  paperLeft: {
    padding: '1rem',
    borderRadius: '20px 20px 20px 0',
    wordBreak: 'break-word',
    maxWidth: '50%',
  },
  author: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatarUsers: {
    fontSize: theme.spacing(2),
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
}));

// backgroundColor: theme.palette.warning.main,
