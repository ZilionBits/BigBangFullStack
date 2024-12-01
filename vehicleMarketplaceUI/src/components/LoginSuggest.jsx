import { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import GlobalDataContext from "../assets/global/GlobalDataContext";
import { vehicleApi } from "../restAPI/VehicleAPI"

export const LoginSuggest = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {handleVisitor} = useContext(GlobalDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ userName, password });

    const response = await vehicleApi.authenticate(userName, password);

    console.log(response)

  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            label="User name"
            type="text"
            fullWidth
            margin="normal"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Button variant="contained" sx={{ mt: 2 }}>
              SignUp
            </Button>
            <Link to="/homepage">
            <Button onClick={() => handleVisitor("Guest")} variant="contained" sx={{ mt: 2 }}>
              Continue as guest
            </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
