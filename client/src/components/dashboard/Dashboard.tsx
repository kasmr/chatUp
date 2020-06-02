import React from 'react';
import { IUsers } from '../chat/Chat';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

interface Props {
  room: string | null | undefined;
  name: string | null | undefined;
  users: IUsers[];
}

const Dashboard: React.FC<Props> = ({ name, room, users }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.room}>
        <Typography variant='h4' component='h4'>
          Chat room: {room?.toUpperCase()}
        </Typography>
      </div>
      <div className={classes.user}>
        <Avatar className={classes.avatar}>
          {name?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant='h4' component='h4'>
          {name}
        </Typography>
      </div>
      <Typography variant='h5' component='h5'>
        People in the room: {users.length}
      </Typography>
      <AvatarGroup max={3}>
        {users.map((user, i) => (
          <Avatar key={i} alt={user.name} className={classes.userAvatars}>
            {user.name?.charAt(0).toUpperCase()}
          </Avatar>
        ))}
      </AvatarGroup>
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    margin: theme.spacing(4),
  },
  room: {
    display: 'flex',
    fontSize: '0.7rem',
    flexWrap: 'wrap',
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userAvatars: {
    backgroundColor: randomColor(),
  },
  avatar: {
    margin: theme.spacing(4),
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize: theme.spacing(5),
    backgroundColor: randomColor(),
  },
}));

const randomColor = () => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = '#' + hex.toString(16);

  return color;
};
