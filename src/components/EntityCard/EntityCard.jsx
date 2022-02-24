import React from "react"
import { Grid, Card, CardContent, Typography } from "@mui/material"

import { getEntityDetailsByID, getJurisdictionByID } from "../../data/data"

function EntityCard(props) {

  const entity = getEntityDetailsByID(props.id)
  const jurisdiction = getJurisdictionByID(entity.jurisdictionID)

  const style = {
    bgcolor: 'background.paper',
    border: '1px solid #a9a9a9',
    mt: 2
  }

  return (

    <Grid>
      <Card sx={style}>
        <CardContent>
          <Typography>{entity.name}, LLC</Typography>
          <Typography variant="overline">{jurisdiction.name}</Typography>
          <Typography sx={{fontSize: 14}} noWrap>{entity.address}</Typography>
        </CardContent>
      </Card>
    </Grid>

  )

}

export default EntityCard;