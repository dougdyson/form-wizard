import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@mui/material/';

import Header from '../Header/Header';
// import Compliance from '../Compliance/Compliance';
import Entity from '../Entity/Entity';

function App() {
  return (
    <Container>
      <Grid>
        <Header />
      </Grid>
      <Entity />
    </Container>
  );
}

export default App;
