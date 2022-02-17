import React, { useState } from "react";
// import { loginSchema } from "./LoginValidation";
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {

  const [value, setValue] = useState({ email: "", password: "" });
  
  const handleChange = (e) => {
    const value = e.target.value;
    const id   = e.target.id
    console.log(id, value);
    setState(prevState => {
      // Object.assign would also work
      return {...prevState, ...updatedValues};
    })
    
  }

  const validateLogin = () => {
    console.log(value.email, value.password);
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
            console.log(value);;
          }}
        >
        Login
        </Button>
      </form>
    </Grid>
  )
}