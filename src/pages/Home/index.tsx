import { Container, Grid, Typography, Divider } from "@mui/material";
import { Fragment } from "react";
import CardMain from "../../components/CardMain";
import cards from "./provider";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <Typography className={classes.mainTitle}>Áreas de trabalho</Typography>
        <Divider />

        <Grid container spacing={3}>
          {cards.map(({ title, description, link }) => {
            return (
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <CardMain title={title} description={description} link={link} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
