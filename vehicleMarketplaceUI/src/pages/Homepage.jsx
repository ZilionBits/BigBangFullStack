import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import GlobalDataContext from "../assets/global/GlobalDataContext";

export const Homepage = () => {
  const { showWelcome, handleShowWelcome } = useContext(GlobalDataContext);

  return (
    <>
      <ResponsiveAppBar />
      {showWelcome && (
        <Box width={"50vh"} m={"auto"} mt={"50px"} textAlign="center">
          <Typography>
            Welcome to most exclusive handcrafted pieces of metals.
          </Typography>

          <Link to="marketplace">
            <Button onClick={handleShowWelcome} sx={{ color: "orange" }}>
              To the market!
            </Button>
          </Link>
        </Box>
      )}
      <Outlet />
    </>
  );
};
