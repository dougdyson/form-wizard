import React, { useState } from "react";
import { loginSchema } from "./LoginValidation";
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {

  const [state, setState] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.id]: value
    });
  }

  // const validateLogin = (event) => {
  //   event.preventDefault();
  //   let formData = {
  //     email: event.target[0].value,
  //     password: event.target[1].value
  //   };
  //   console.log(formData);
  // }
  
  return (
    <Grid 
      container 
      direction="column">
      <form noValidate autoComplete="off">
        <Grid>
          <TextField 
            id="email"
            value={state.email}
            label="email"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid>
          <TextField 
            id="password"
            value={state.password}
            label="password" 
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
      <Button
        variant="contained"
        onClick={() => {
          console.log(state);
        }}
      >
        Login
      </Button>
      </form>
    </Grid>
  )
}