import React from 'react';
import { IUsers } from '../chat/Chat';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';

interface Props {
  room: string | null | undefined;
  name: string | null | undefined;
  users: IUsers[];
}

const Dashboard: React.FC<Props> = ({ name, room, users }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.room} variant='h4' component='h4'>
        Chat room: {room?.toUpperCase()}
      </Typography>
      <div className={classes.user}>
        <Avatar className={classes.avatar}>
          {name?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography className={classes.typography} variant='h4' component='h4'>
          {name}
        </Typography>
      </div>
      <Card className={classes.card} variant='outlined'>
        <CardContent>
          <Typography
            className={classes.typography}
            variant='h5'
            component='h2'
          >
            People in the room: {users.length}
          </Typography>
          <AvatarGroup className={classes.avatarGroup} max={3}>
            {users.map((user, i) => (
              <LightTooltip
                key={i}
                title={user.name === name?.toLowerCase() ? 'you' : user.name}
              >
                <Avatar alt={user.name} className={classes.userAvatars}>
                  {user.name?.charAt(0).toUpperCase()}
                </Avatar>
              </LightTooltip>
            ))}
          </AvatarGroup>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    WebkitFlexDirection: 'column',
    justifyContent: 'flex-start',
    color: '#fff',
    margin: '2rem',
    height: '90vh',
    [theme.breakpoints.down('sm')]: { margin: '0.5rem' },
  },
  room: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '2rem',
    wordBreak: 'break-word',
    margin: '2rem 0.5rem',
    [theme.breakpoints.down('sm')]: { fontSize: '1rem' },
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '2rem 0',
  },
  avatarGroup: {
    height: '100%',
  },
  userAvatars: {
    backgroundColor: randomColor(),
    marginTop: '1rem',
    fontSize: theme.spacing(5),
    width: theme.spacing(7),
    height: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      fontSize: theme.spacing(3),
    },
  },
  avatar: {
    margin: '0 1rem',
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize: theme.spacing(5),
    backgroundColor: randomColor(),
    [theme.breakpoints.down('sm')]: {
      margin: '0 0.5rem',
      width: theme.spacing(5),
      height: theme.spacing(5),
      fontSize: theme.spacing(4),
    },
  },
  card: {
    width: '90%',
    minHeight: 400,
    background: theme.palette.primary.dark,
    color: '#fff',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
    },
  },

  pos: {
    color: '#fff',
  },
  typography: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

const randomColor = () => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = '#' + hex.toString(16);

  return color;
};

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: '1rem',
  },
}))(Tooltip);
