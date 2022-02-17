import React, { useState } from "react";
import { loginSchema } from "./LoginValidation";
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {

  const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const SayHello = (e) => {
    alert(e[0]);
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
            value={value}
            label="email"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid>
          <TextField 
            id="password"
            label="password" 
            variant="outlined"
          />
        </Grid>
      <Button
        variant="contained"
        onClick={() => {
          SayHello();
        }}
      >
        Login
      </Button>
      </form>
    </Grid>
  )
}