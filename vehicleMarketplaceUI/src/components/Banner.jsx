import banner from "../assets/banner-bugatti.jpg";
import { Box } from "@mui/material";

export const Banner = () => {
  return (
    <Box sx={{ height: "15vh" }}>
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
        src={banner}
        alt="bugatti taken from the front"
      />
    </Box>
  );
};
