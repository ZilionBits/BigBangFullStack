/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export const ProductCard = ({ brand, model, image, price }) => {
  return (
    <Card sx={{ width: 400, backgroundColor: "rgb(255,255,255,0.5)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="selling product image"
          height="200"
        />
        <CardContent>
          <Typography variant="h5" textTransform="uppercase">
            {brand}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            sx={{ color: "text.secondary" }}
          >
            {model}
          </Typography>
          <Typography variant="body2">{price} €</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{color: "white"}} size="large">Details</Button>
        <Button sx={{color: "green"}} size="large">Buy</Button>
        <Button sx={{color: "yellow"}} size="large">Update</Button>
        <Button sx={{color: "red"}} size="large">Delete</Button>
      </CardActions>
    </Card>
  );
};
