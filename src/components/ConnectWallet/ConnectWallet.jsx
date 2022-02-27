import React, { useState } from "react";

import { Grid, Typography } from "@mui/material";

const ConnectToWallet = (props) => {

  return (
    <Grid container sx={{mt: 2, ml: 2}}>
      <Typography variant="overline">
        Connect To Wallet!
      </Typography>
    </Grid>
  )

}

export default ConnectToWallet;