import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import React from "react";

import Form from "./components/Form/Form";
import Movies from "./components/Movies/Movies";
import movies from "./images/movies.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Movie App
        </Typography>
        <img
          className={classes.image}
          src={movies}
          alt='Movie app'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Movies />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
