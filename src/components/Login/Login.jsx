import React, { useState } from "react";
// import { loginSchema } from "./LoginValidation";
import { TextField, Button, Grid } from "@mui/material";

const reducer = (id, val) => {
   console.log('post', id, val);
   return
}

export default function Login() {

  const [value, setState] = useState({});
  
  const handleChange = e => {
    setState({...value, [e.target.id]: e.target.value})
  }
  
  const validateLogin = () => {
    // console.log(value.email, value.password);
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