import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ForumIcon from '@material-ui/icons/Forum';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';

interface IForm {
  username: string;
  room: string;
}

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  const [form, setForm] = useState<IForm>({
    username: '',
    room: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (form.username && form.room) {
      history.push(`/chat?name=${form.username}&room=${form.room}`);
    }
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component='h1' variant='h3'>
            ChatUp
          </Typography>
          <Typography component='h6' variant='h6' className={classes.subTitle}>
            Chat with everyone you can
          </Typography>
          <Avatar className={classes.avatar}>
            <ForumIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Join
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              label='Username'
              name='username'
              autoFocus
              onChange={onChange}
              required
            />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='room'
              label='Room'
              onChange={onChange}
              required
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Join
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(img/login1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subTitle: {
    marginBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
