import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@mui/material/';
import "./app.css"
import Entity from '../Entity/Entity';

function App() {
  return (
    <Container>
      <Grid>
        <Entity />
      </Grid>
    </Container>
  );
}

export default App;
