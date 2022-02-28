import React from "react";
import { ethers } from "ethers";

import { Grid, Typography } from "@mui/material";

const provider = new ethers.providers.Web3Provider(window.ethereum)

const ConnectToWallet = () => {

  return (
    <Grid container sx={{mt: 2, ml: 2}}>
      <Typography variant="overline">
        Connect To Wallet
      </Typography>
    </Grid>
  )

}

export default ConnectToWallet;