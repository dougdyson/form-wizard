import React from "react"
import { Grid, Card, CardContent, Typography } from "@mui/material"

import { getEntityDetailsByID, getJurisdictionByID } from "../../data/data"

function EntityCard(props) {

  const entity = getEntityDetailsByID(props.id)
  const jurisdiction = getJurisdictionByID(entity.jurisdictionID)

  
  return (

    <Grid>
      <Card>
        <CardContent>
          <Typography>{entity.name}, LLC</Typography>
          <Typography>{jurisdiction.name}</Typography>
          <Typography noWrap>{entity.address}</Typography>
        </CardContent>
      </Card>
    </Grid>

  )

}

export default EntityCard;