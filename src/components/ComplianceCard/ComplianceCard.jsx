import React from "react";

import { Grid, Card, CardContent, Typography } from "@mui/material";

import { getRuleByID } from "../../data/data"

export default function ComplianceCard(props) {

  const rule = getRuleByID(props.id);

  const cardStyle = {
    bgcolor: 'background.paper',
    border: '1px solid #a9a9a9',
    mt: 1,
    mb: 2,
  }

  const messageStyle = {
    fontSize: 14, 
    ml: 1, 
    mr: 1, 
    color: "darkgrey"
  }

  return(
    <Grid onClick={() => props.setActiveItem(rule)}>
      <Card style={cardStyle}>
        <CardContent>
          <Typography>{rule.name}</Typography>
          <Typography style={messageStyle}>Please complete for compliance</Typography>
        </CardContent>
      </Card>
    </Grid>
  )

}