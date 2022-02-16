import { makeStyle } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { 
  Container,
  Grid
} from '@material-ui/core';


function App() {
  return (
    <Container>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography>Logo</Typography>
        </Grid>
        <Grid item>
          <Typography>Account</Typography>
        </Grid>
      </Grid>
      <Typography>Entity/Compliance List</Typography>
      <Grid container>
        <Grid xs="12">Item in list</Grid>
        <Grid>Item in list</Grid>
      </Grid>
    </Container>
  );
}

export default App;
