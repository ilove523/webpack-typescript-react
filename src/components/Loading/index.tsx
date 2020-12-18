import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: 99,
    backgroundColor: theme.palette.text.disabled,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

interface Properties {
  isShow: boolean
}

export default function Loading(properties: Properties): React.ReactElement {
  const classes = useStyles();
  return (
    properties.isShow
      ? <div className={classes.root}>
      <CircularProgress />
    </div>
      : <div />
  );
}
