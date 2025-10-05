import { Box } from "@mui/material";
import styles from "./root.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default function Root() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
        id={styles.mainBox}
      >
        <Box>
          <h1>Welcome to ExoSearch</h1>
        </Box>
        <Box sx={{ width: "50%", textAlign: "center" }}>
          <p>
            We are a team of space enthusiasts dedicated to the search for
            exoplanets. Our mission is to explore the universe and discover new
            worlds beyond our solar system.
          </p>
        </Box>
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mb: 5,height:"250px" }}
      >
        <Grid size={6}>
            <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "rgba(20, 41, 155, 0.3)",
                backdropFilter: "blur(8px)",
                mt: 1.5,
                height:"100%",
                textAlign:"center",
              }}
            >
              <h1>HLELO</h1>
            </Box>
        </Grid>
        <Grid size={6}>
          <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "rgba(20, 41, 155, 0.3)",
                backdropFilter: "blur(8px)",
                mt: 1.5,
                height:"100%",
                textAlign:"center",
              }}
            >
              <h1>HLELO</h1>
            </Box>
        </Grid>
      </Grid>
    </>
  );
}
