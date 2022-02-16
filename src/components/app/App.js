import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material/';

import Header from '../Header/Header';

function App() {
  return (
    <Container>
       <Header />
    </Container>
  );
}

export default App;
