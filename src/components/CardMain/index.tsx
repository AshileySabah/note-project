import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: { background: "#E6E5E7", marginTop: "20px" },
  description: { marginTop: "10px" },
  link: { textDecoration: "none" },
});

const CardMain = ({ title, description, link }: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.diferenca.com/imagens/pessoas-no-trabalho-cke.jpg"
          alt="green iguana"
        />
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <ShareIcon /> Compartilhe
        </Button>
        <Link to={link} className={classes.link}>
          <Button size="small" variant="contained">
            Acessar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardMain;
