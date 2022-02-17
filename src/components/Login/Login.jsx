import React from "react";
import * as yup from 'yup';
import { TextField, Button, Typography, Grid } from "@mui/material";

const Login = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center"
    >
      <Typography variant='overline'>Sign In</Typography>
      <TextField margin="normal" size="small" id="outlined-basic" label="email" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="password" variant="outlined" />
      <Button variant="contained">Login</Button>
    </Grid>
  )
}

export default Login;