import icon1 from '@assets/images/icon1.png';
import icon2 from '@assets/images/icon2.png';
import logo from '@assets/images/logo512.png';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { setTopNavType } from '@service/top-nav.service';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '6rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 99,
  },
  content: {
    marginTop: theme.spacing(10),
  },
  item: {
    display: 'block',
    padding: theme.spacing(4, 0, 0),
    cursor: 'pointer',
  },
  img: {
    display: 'block',
    width: '4rem',
    margin: 'auto',
    borderRadius: '6px',
  },
  logo: {
    display: 'block',
    padding: theme.spacing(1, 0),
    backgroundColor: '#fff',
  },
}));

const SidebarNav = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const setNavTop = (type: string) => {
    dispatch(setTopNavType(type));
  };

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img className={classes.img} src={logo} alt='' title='' />
      </div>
      <div className={classes.content}>
        <Link to='/' className={classes.item} onClick={() => setNavTop('MEMBER')}>
          <img className={classes.img} src={icon2} alt='' title='' />
        </Link>
        <Link to='/' className={classes.item} onClick={() => setNavTop('TRANSACTION')}>
          <img className={classes.img} src={icon1} alt='' title='' />
        </Link>
      </div>
    </div>
  );
};

export default SidebarNav;
