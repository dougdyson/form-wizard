import React from "react";

import { Grid, Card, CardContent, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { getRuleByID } from "../../data/data"

export default function ComplianceCard(props) {

  const rule = getRuleByID(props.id);
  console.log('props==>>', props, 'ruleName==>>', rule);

  return(
    <Grid onClick={() => props.setActiveItem(rule)}>
      <Card>
        <CardContent>
          <CheckCircleOutlineIcon />
          <Typography>{rule.name}</Typography>
          <Typography>Please update message for incomplete compliance</Typography>
        </CardContent>
      </Card>
    </Grid>
  )

}