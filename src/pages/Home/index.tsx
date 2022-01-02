import { Container, Grid, Typography, Divider } from "@mui/material";
import { Fragment } from "react";
import CardMain from "../../components/CardMain";

const cards = [
  {
    title: "Trabalho",
    description: "Notas para controle e distribuição de tarefas do trabalho",
    link: "desktop",
  },
  {
    title: "Faculdade",
    description:
      "Notas para controle e distribuição de tarefas de um trabalho da faculdade",
    link: "desktop",
  },
];

const Home = () => {
  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
        <Typography
          sx={{
            fontWeight: "200",
            fontSize: "2em",
          }}
        >
          Áreas de trabalho
        </Typography>
        <Divider />

        <Grid container>
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
