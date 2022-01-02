import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Fragment } from "react";
import ShareIcon from "@mui/icons-material/Share";

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
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Card
              sx={{ maxWidth: 345, background: "#E6E5E7", marginTop: "20px" }}
            >
              <CardContent>
                <Typography variant="h5">Trabalho</Typography>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.diferenca.com/imagens/pessoas-no-trabalho-cke.jpg"
                  alt="green iguana"
                />
                <Typography variant="body2" color="text.secondary">
                  Notas para controle e distribuição de tarefas do trabalho
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <ShareIcon /> Compartilhe
                </Button>
                <Button size="small" variant="contained">
                  Acessar
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Card
              sx={{ maxWidth: 345, background: "#E6E5E7", marginTop: "20px" }}
            >
              <CardContent>
                <Typography variant="h5">Faculdade</Typography>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.diferenca.com/imagens/pessoas-no-trabalho-cke.jpg"
                  alt="green iguana"
                />
                <Typography variant="body2" color="text.secondary">
                  Notas para controle e distribuição de tarefas de um trabalho
                  da faculdade
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <ShareIcon /> Compartilhe
                </Button>
                <Button size="small" variant="contained">
                  Acessar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
