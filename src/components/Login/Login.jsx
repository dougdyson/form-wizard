import React, { useState } from "react";
import data from '../../data/data';
// import { loginSchema } from "./LoginValidation";
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {

  const [value, setState] = useState({});
  
  const handleChange = e => {
    setState({...value, [e.target.id]: e.target.value})
  }

  const validateLogin = (credentials) => {
    if (data.validLogin(credentials)) {
      return true
    }
    else {
      return false
    }
  }
  
  return (
    <Grid 
      container 
      direction="column">
      <form noValidate autoComplete="off" onSubmit={validateLogin}>
        <Grid>
          <TextField 
            id="email"
            value={value.email}
            label="email"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid>
          <TextField 
            id="password"
            value={value.password}
            label="password" 
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Button
          variant="contained"
          onClick={() => {
          if (!validateLogin(value)){
            alert('Invalid email or password!')
          }
          else {
            alert(`Welcome ${value.email}!`)
          }
          }}
        >
        Login
        </Button>
      </form>
    </Grid>
  )
}