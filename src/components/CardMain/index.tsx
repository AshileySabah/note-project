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

const CardMain = ({ title, description, link }: any) => {
  return (
    <Card sx={{ maxWidth: 345, background: "#E6E5E7", marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.diferenca.com/imagens/pessoas-no-trabalho-cke.jpg"
          alt="green iguana"
        />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <ShareIcon /> Compartilhe
        </Button>
        <Link to={link} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained">
            Acessar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardMain;
