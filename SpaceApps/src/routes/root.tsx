import { Box } from "@mui/material";
import styles from "./root.module.css";
import Grid from "@mui/material/Grid";
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
        <img
            src={"/Screenshoot6.png"}
            alt="EXOQUEST LOGO"
            style={{
              maxWidth: "30%",
              height: "30%",
              borderRadius: "8px",
              padding: "10px",
            }}
          />
        <Box>
          <h1>Welcome to ExoQuest  </h1>

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
        columnSpacing={{ xs: 0, sm: 2, md: 3 }}
        sx={{ marginBottom: 5 }}
      >
        <Grid size={3}>
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "rgba(20, 41, 155, 0.3)",
              backdropFilter: "blur(8px)",
              mt: 1.5,
              height: "100%",
              textAlign: "center",
            }}
          >
            <h1>Vaanya</h1>
            <p>
              Vaanya worked on the astrophysics and data interpretation parts of
              ExoQuest, mainly focusing on the scientific validation of the
              machine learning models. She combined astronomical context into
              the analysis pipeline, which ensured the data processing, feature
              extraction and model outputs aligned with astrophysical
              principles. In the ExoQuest team, Vaanya worked on understanding
              and refining the stellar light-curve data, calibrating the models
              for better precision, and verifying that the predictions match the
              behaviors of exoplanets.
            </p>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "rgba(20, 41, 155, 0.3)",
              backdropFilter: "blur(8px)",
              mt: 1.5,
              height: "100%",
              textAlign: "center",
            }}
          >
            <h1>Arihant</h1>
            <p>
              Arihant specialized in the machine learning & AI, data
              reprocessing and structuring, and programming of the machine
              learning model to predict the probabilities and likelihood of
              Exo-Planets in a system. In the ExoQuest team, he specifically and
              primarily contributed to the building and training of the machine
              learning model and the implementation of the outlined regressions,
              including Logistic, KNN, and the Decision Tree.
            </p>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "rgba(20, 41, 155, 0.3)",
              backdropFilter: "blur(8px)",
              mt: 1.5,
              height: "100%",
              textAlign: "center",
            }}
          >
            <h1>Mehak</h1>
            <p>
              Mehak helped in developing the web page by writing code and
              exploring backend integration. She also assisted in preparing the
              project report and documenting its key details.
            </p>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "rgba(20, 41, 155, 0.3)",
              backdropFilter: "blur(8px)",
              mt: 1.5,
              height: "100%",
              textAlign: "center",
            }}
          >
            <h1>Noel</h1>
            <p>
              Noel helped make the website, and helped conduct research on
              backend integration with the AI machine learning model. He was
              also responsible for the styling of the website, and making the
              data approachble by novices and experts alike.
            </p>
          </Box>
        </Grid>
      </Grid>
       <Box sx = {{textAlign: "center"}}>
        <h1>ADDITIONAL IDEAS</h1>
       </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ margin: 5 }}
      >
       
        <Grid
          size={6}
          sx={{
            borderRadius: "10px",
            backgroundColor: "rgba(20, 41, 155, 0.3)",
            backdropFilter: "blur(8px)",
            mt: 1.5,
            height: "100%",
            textAlign: "center",

          }}
        >
          <p>
            Using the AI model to predict the chances of life on an exoplanet.
          </p>
        </Grid>
        <Grid
          size={6}
          sx={{
            borderRadius: "10px",
            backgroundColor: "rgba(20, 41, 155, 0.3)",
            backdropFilter: "blur(8px)",
            mt: 1.5,
            height: "100%",
            textAlign: "center",
          }}
        >
          <p>
            Using the AI model to generate a 3D prediction of the exoplanet.
          </p>
        </Grid>
      </Grid>
    </>
  );
}
