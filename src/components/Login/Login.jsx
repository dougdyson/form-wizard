import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
// import * as yup from 'yup';
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {
  
  return (
    <Grid 
    container 
    direction="column" 
    justifyContent="center" 
    alignItems="center">
      <form noValidate autoComplete="off">
        <Grid>
          <TextField 
            id="email"
            label="email"
            variant="outlined"
            required
            size="small" 
            margin="normal" 
            size="small" 
            id="outlined-basic" />
        </Grid>
        <Grid>
          <TextField 
            id="password"
            label="password" 
            variant="outlined"
            required
            size="small" />
        </Grid>
      </form>
      <Button 
        variant="contained">
          Login
      </Button>
    </Grid>
  )
}