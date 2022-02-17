import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@mui/material/';

import Header from '../Header/Header';
import Compliance from '../Compliance/Compliance';
import Login from '../Login/Login';

function App() {
  return (
    <Container>
      <Grid>
        <Header />
      </Grid>
      <Login />
    </Container>
  );
}

export default App;
