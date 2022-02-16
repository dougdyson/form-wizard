import React from 'react';
import { Container, Grid, Avatar, Stack, Card } from '@mui/material/';
import { Typography } from '@mui/material/';

function App() {
  return (
    <Container>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="overline">BlockDocs</Typography>
        </Grid>
        <Grid item>
          <Avatar sx={{ width: 24, height: 24 }}></Avatar>
        </Grid>
      </Grid>
      <Grid>
        <Typography variant="subtitle2">List Header</Typography>
        <Stack>
          <Card>Card in list</Card>
        </Stack>
      </Grid>
    </Container>
  );
}

export default App;
