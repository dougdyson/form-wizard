import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
// import * as yup from 'yup';
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {
  
  return (
    <Grid 
      container 
      direction="column" 
      alignItems="center">
      <form noValidate autoComplete="off">
        <Grid>
          <TextField 
            id="email"
            label="email"
            variant="outlined"
            margin="normal"
            size="small"
            gutterBottom="true"
          />
        </Grid>
        <Grid>
          <TextField 
            id="password"
            label="password" 
            variant="outlined"
            size="small"
            gutterBottom="true"
          />
        </Grid>
      <Button
        alignItems="center" 
        variant="contained"
      >
        Login
      </Button>
      </form>
    </Grid>
  )
}