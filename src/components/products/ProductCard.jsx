import React from "react";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import { CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = (props) => {
  const { name, description, brand } = props;

  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia sx={{ height: 200 }} image="https://tinyurl.com/4dyyhh2f" title="Thi" />
      <CardContent>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography component="p">{description}</Typography>
        <Typography component="p" color="text.secondary">
          {brand}
        </Typography>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired
};

export default ProductCard;
