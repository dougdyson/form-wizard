import React from 'react';
import { Container, Grid } from '@mui/material/';

// import AppBar from '@mui/material/AppBar';
import EntityList from '../EntityList/EntityList';

function App() {

  const owner = '04044178226a3132ac6b5c441d839d6cf69d95a8d0d1e0f6eba43498a28a8ea58c8ef889c0ccedc94f5f6467e4caab1776a6867af143b9ba6171b27e6fe96174d1';

  return (
    <Container>
     
      <Grid>
        <EntityList owner={owner} />
      </Grid>
    </Container>
  );
}

export default App;
