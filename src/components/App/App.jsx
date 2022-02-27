import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppBar from '../AppBar/AppBar';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
// import EntityList from '../EntityList/EntityList';
// import ComplianceList from '../ComplianceList/ComplianceList';

import { Container, Grid } from '@mui/material/';


export default function App() {
 
  return (

    <Container>
      <Grid>
        <AppBar />
      </Grid>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ConnectWallet />} />
        </Routes>
      </BrowserRouter>
    </Container>
  
  );

}
