import React from "react"
import { Grid, Card, CardContent, Typography } from "@mui/material"

import { getEntityDetailsByID, getJurisdictionByID } from "../../data/data"

function EntityCard(props) {

  const entity = getEntityDetailsByID(props.id)
  const jurisdiction = getJurisdictionByID(entity.jurisdictionID)

  const style = {
    bgcolor: 'background.paper',
    border: '1px solid #a9a9a9',
    mt: 1,
    mb: 2,
  }

  return (

    <Grid>
      <Card sx={style}>
        <CardContent>
          <Grid>
            <Typography sx={{ml: 1, mr: 1}}>{entity.name}, LLC</Typography>
            <Typography variant="overline" sx={{ml: 1, mr: 1}}>{jurisdiction.name}</Typography>
            <Typography sx={{fontSize: 14, ml: 1, mr: 1, color: "darkgrey"}} noWrap>{entity.address}</Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>

  )

}

export default EntityCard;