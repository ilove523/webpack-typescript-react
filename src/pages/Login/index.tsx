import { useLazyQuery } from '@apollo/client';
import { Box, Button, Card, CardContent, CardHeader, Divider, Snackbar, TextField } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { I18N, I18N_NS } from '@pages/_i18n';
import { keyPathMirror } from 'key-path-mirror';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';

import Language from '@components/Language';
import Loading from '@components/Loading';

import { getLoginInfo, LoginData } from './gqls';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    '& .box': {
      position: 'relative',
    },
  },
  card: {
    width: '400px',
  },
  cardContent: {
    display: 'flex',
    flexFlow: 'column',
  },
  title: {
    color: '#fff',
    backgroundColor: theme.palette.text.secondary,
  },
  form: {
    display: 'flex',
    flexFlow: 'column',
    '& .textField': {
      marginBottom: '10px',
    },
  },
  top: {
    position: 'absolute',
    right: '0.5rem',
    top: '-0.2rem',
    '& button': {
      color: '#ffffff',
      '& .text': {
        borderColor: '#ffffff',
      },
    },
  },
}));

export function Login(): React.ReactElement {
  const classes = useStyles();
  const { t } = useTranslation(I18N_NS);
  const history = useHistory();
  const formInitData = new LoginData();
  const fields = keyPathMirror(formInitData);
  const [formData, setFormData] = React.useState<LoginData>(formInitData);
  const [alertState, setAlertState] = React.useState({
    open: false,
    message: '',
  });

  const loginSchema = object({
    account: string().required(),
    password: string().required(),
  });

  const [getLogin, { loading: loginLoading, data: loginInfo }] = useLazyQuery(getLoginInfo);

  if (loginInfo) {
    history.push('/home');
  }

  const handleAlertClose = () => {
    setAlertState({ open: false, message: '' });
  };

  const handleInput = (event_: React.ChangeEvent<HTMLInputElement>) => {
    const key = event_.target.id;
    const { value } = event_.target;
    setFormData({ ...formData, [key]: value });
  };

  const submitLogin = async () => {
    let valid = false;
    try {
      await loginSchema.validate(formData);
      valid = true;
    } catch (error) {
      console.error(error);
    }
    if (valid) {
      getLogin({
        variables: formData,
      });
    }
  };

  return (
    <div className={classes.root}>
      <Loading isShow={Boolean(loginLoading)} />

      <Snackbar
        open={alertState.open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        message={alertState.message}
      />

      <Box display='flex' className='box' flexDirection='row-reverse'>
      {/* <Box className='box'> */}
        <Card className={classes.card}>
          <Language className={classes.top} />

          <CardHeader title={t(I18N.login.header_title)} className={classes.title} />

          <CardContent className={classes.cardContent}>
            <form className={classes.form} noValidate autoComplete='off'>
              <TextField
                className='textField'
                variant='outlined'
                id={fields.account}
                label={t(I18N.login.user_name)}
                value={formData.account || ''}
                onChange={handleInput}
              />
              <TextField
                className='textField'
                variant='outlined'
                id={fields.password}
                label={t(I18N.login.user_password)}
                type='password'
                value={formData.password || ''}
                onChange={handleInput}
              />
            </form>
            <Divider variant='inset' />
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                submitLogin();
              }}
            >
              {t(I18N.login.submit_btn)}
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export const LOGIN_PAGE_URL = '/login';
