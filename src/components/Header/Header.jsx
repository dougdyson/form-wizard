import React from 'react';
import { Grid, Avatar, Typography } from '@mui/material/';

export default function Header(){

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="overline">BlockDocs</Typography>
      </Grid>
      <Grid item>
        <Avatar sx={{ width: 24, height: 24 }}></Avatar>
      </Grid>
    </Grid>
  )
}

// export default Header;