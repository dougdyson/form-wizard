import React from "react";
import { ethers } from "ethers";

import { Grid, Typography } from "@mui/material";

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()

const ConnectToWallet = () => {

  return (
    <Grid container sx={{mt: 2, ml: 2}}>
      <Typography variant="overline">
        Connect To Wallet via ethers.js
      </Typography>
    </Grid>
  )

}

export default ConnectToWallet;