import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

export default function Login() {

  const [value, setState] = useState({"email": 'dale@noreply.com', "password": 'Pass123!'});
  const [valid, setValid] = useState(null);
  
  const handleChange = e => {
    setState({...value, [e.target.id]: e.target.value})
    // use .name
  }

  const validateLogin = (credentials) => {

    const isFormValid = loginSchema.validate(credentials).then(function(value) {
    console.log(value);
    if (!isFormValid){
      console.log('failed Yup validation');
    }

    })
    .catch(function(err) {
      console.log(err)
    });

  }
  
  return (
    <Grid 
      container 
      direction="column">
      {valid == true ? <p>Success message</p> : <p>Fail</p>}
      <form noValidate autoComplete="off">
        <Grid>
          <TextField id="email" value={value.email} label="email" variant="outlined" onChange={handleChange}
        />
        </Grid>
        <Grid>
          <TextField id="password" value={value.password} label="password" variant="outlined" onChange={handleChange}
        />
        </Grid>
        <Button variant="contained" onClick={() => {
          validateLogin(value)
        }}>
        Login
        </Button>
      </form>
    </Grid>
  )
}