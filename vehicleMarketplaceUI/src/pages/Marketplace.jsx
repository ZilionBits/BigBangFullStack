import axios from "axios";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Grid2, Box } from "@mui/material";

export const Marketplace = () => {
  const [adData, setAdData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/vehicleAd")
      .then((res) => setAdData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(adData);

  return (
    <Box sx={{ flexGrow: 1, pb: "50px" }}>
    <Grid2 container spacing={2} sx={{justifyContent: "center"}}>
      {adData.map((ad) => (
        <Grid2 key={ad.id} size={"auto"}>
          <ProductCard
            brand={ad.brand}
            model={ad.model}
            image={ad.image}
            price={ad.price}
          />
        </Grid2>
      ))}
    </Grid2>
    </Box>
  );
};
