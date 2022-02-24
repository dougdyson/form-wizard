import React from "react";

import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";

import { getRuleByID } from "../../data/data"

export default function ComplianceCard(props) {

  const rule = getRuleByID(props.id);

  const cardStyle = {
    bgcolor: 'background.paper',
    border: '1px solid #a9a9a9',
  }

  const messageStyle = {
    fontSize: 14,  
    color: "darkgrey"
  }

  return(
    <Grid onClick={() => props.setActiveItem(rule)}>
      <Card style={cardStyle} sx={{mt: 1, mb: 1}}>
        <CardActionArea>
          <CardContent>
            <Typography sx={{ml: 1, mr: 1}}>{rule.name}</Typography>
            <Typography style={messageStyle} sx={{ml: 1, mr: 1}}>Please complete for compliance</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )

}