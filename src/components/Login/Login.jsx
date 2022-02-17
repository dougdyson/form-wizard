import React, { useState } from "react";
import { validLogin } from '../../data/data';
import { loginSchema } from "./LoginValidation";
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {

  const [value, setState] = useState({"email": '', "password": ''});
  
  const handleChange = e => {
    setState({...value, [e.target.id]: e.target.value})
  }

  const validateLogin = (credentials) => {

    const isFormValid = loginSchema.validate(credentials).then(function(value) {
      console.log(value);
    })
    .catch(function(err) {
      console.log(err);
    });

    if (!isFormValid){
      console.log('failed Yup validation');
      return false
    }

    if (validLogin(credentials)) {
      console.log(`${credentials.email} logged in.`);
      return true
    }
    else {
      console.log(`${credentials.email} login failed.`);
      return false
    }
  }
  
  return (
    <Grid 
      container 
      direction="column">
      <form noValidate autoComplete="off" onSubmit={validateLogin}>
        <Grid>
          <TextField id="email" value={value.email} label="email" variant="outlined" onChange={handleChange}
        />
        </Grid>
        <Grid>
          <TextField id="password" value={value.password} label="password" variant="outlined" onChange={handleChange}
        />
        </Grid>
        <Button variant="contained" onClick={() => {
          if (validateLogin(value) === false){
            console.log('Invalid login')
          }
          else {
            console.log('Valid login')
          }
        }}>
        Login
        </Button>
      </form>
    </Grid>
  )
}