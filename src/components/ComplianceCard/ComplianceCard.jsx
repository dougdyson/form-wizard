import React from "react";

import { Grid, Card, CardContent, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { getRuleByID } from "../../data/data"

export default function ComplianceCard(props) {

  const ruleName = getRuleByID(props.id);

  return(
    <Grid>
      <Card>
        <CardContent>
          <CheckCircleOutlineIcon />
          <Typography>{ruleName}</Typography>
          <Typography>Please update message for incomplete compliance</Typography>
        </CardContent>
      </Card>
    </Grid>
  )

}