import 'reflect-metadata'; // required by class-validator family
import React from 'react';
import './app.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRouter from '@routers/app-router';
import themeMemo from '@styles/theme-memo';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={themeMemo()}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
