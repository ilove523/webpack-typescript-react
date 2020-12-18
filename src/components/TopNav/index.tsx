import Button from '@material-ui/core/Button';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { I18N, I18N_NS } from '@pages/_i18n';
import { Login_PAGE_URL } from '@pages/Login';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { State } from '@src/app/slices/top-nav';
import { selectTopNav } from '@src/service/top-nav.service';

import Language from '@components/Language';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    left: 0,
    top: 0,
    height: '5rem',
    position: 'fixed',
    boxShadow: '0 0 4px -2px #000',
    backgroundColor: '#fff',
    zIndex: 98,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(10),
    height: '5rem',
    '& .title': {
      padding: theme.spacing(0, 6, 0),
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    '& .item': {
      padding: theme.spacing(0, 6, 0),
      color: theme.palette.text.primary,
      fontSize: '1rem',
      textDecoration: 'none',
    },
  },
  logout: {
    position: 'absolute',
    right: '2rem',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const getLogout = () => {
  window.location.href = Login_PAGE_URL;
};

const TopNav = (): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation(I18N_NS);
  const data = useSelector(selectTopNav) as State;
  const dealData = () => {
    if (data.type === 'MEMBER') {
      return (
        <>
          <Link to='/' className='item'>
            <p>{t(I18N.top_nav.summary.text)}</p>
          </Link>
          <Link to='/' className='item'>
            <p>{t(I18N.top_nav.users.text)}</p>
          </Link>
        </>
      );
    }
    return (
      <Link to='/' className='item'>
        <p>{t(I18N.top_nav.orders.text)}</p>
      </Link>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className='title'>{t(I18N.top_nav.title)}</div>

        {dealData()}

        <Language />

        <Button className={classes.logout} onClick={getLogout}>
          {t(I18N.top_nav.exit)}
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
