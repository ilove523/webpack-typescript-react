import { Container } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

import SidebarNav from '@components/SidebarNav';
import TopNav from '@components/TopNav';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(10, 0, 0, 12),
  },
}));

const MainFrame = (properties: any): React.ReactElement => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <TopNav />
      <SidebarNav />
      {properties.children}
    </Container>
  );
};

export default MainFrame;
