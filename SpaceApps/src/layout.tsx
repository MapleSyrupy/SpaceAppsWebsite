import AppBar from "@mui/material/AppBar";
import { NavLink, Outlet } from "react-router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MeteorShower from "./components/MeteorShower";

function App() {
  return (
    <>
      <MeteorShower />
      <Box
        sx={{
          flexGrow: 1,
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AppBar
          position="static"
          sx={{
            width: "80%",
            borderRadius: "10px",
            backgroundColor: "rgba(10, 10, 42, 0.3)",
            backdropFilter: "blur(8px)",
            mt: 1.5,
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              EXOQUEST
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "gray", mr: 2 }}>
              <NavLink
                to="/"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home Page
              </NavLink>
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "gray" }}>
              <NavLink
                to="/data"
                style={{ color: "white", textDecoration: "none" }}
              >
                Go To Data
              </NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
