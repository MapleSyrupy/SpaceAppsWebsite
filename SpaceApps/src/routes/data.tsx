import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState} from "react";



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_e:any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="KNN" {...a11yProps(0)} />
          <Tab label="Logistic Regression" {...a11yProps(1)} />
          <Tab label="Decision Tree" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
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
          <h1>Accuracy</h1>
          <h1>0.9615</h1>
          <h1>Confusion Matrix</h1>
          <TableContainer
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TableCell>True</TableCell>
            <Table
              sx={{ minWidth: 650, width: "60%", border: 2, mb: 2 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">non-planet</TableCell>
                  <TableCell align="right">planet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Non-planet</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "darkblue" }}>
                    1175
                  </TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "white" }}>
                    <span style={{ color: "black" }}>35</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>planet</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "white" }}>
                    <span style={{ color: "black" }}>38</span>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ backgroundColor: "lightblue", color: "black" }}
                  >
                    649
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ textAlign: "center" }} colSpan={2}>
                    Predicted
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <img
            src={"/screenshot1.jpg"}
            alt="ML Model Results"
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: "8px",
              padding: "10px",
            }}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
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
          <h1>Accuracy</h1>
          <h1>0.9905</h1>
          <h1>Confusion Matrix</h1>
          <TableContainer
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TableCell>True</TableCell>
            <Table
              sx={{ minWidth: 650, width: "60%", border: 2, mb: 2 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">non-planet</TableCell>
                  <TableCell align="right">planet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Non-planet</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "darkblue" }}>
                    1195
                  </TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "white" }}>
                    <span style={{ color: "black" }}>15</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>planet</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "white" }}>
                    <span style={{ color: "black" }}>17</span>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ backgroundColor: "lightblue", color: "black" }}
                  >
                    670
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ textAlign: "center" }} colSpan={2}>
                    Predicted
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <img
            src={"/screenshot2.jpg"}
            alt="ML Model Results"
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: "8px",
              padding: "10px",
            }}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
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
          <h1>Accuracy</h1>
          <h1>0.9831</h1>
          <h1>Confusion Matrix</h1>
          <TableContainer
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TableCell>True</TableCell>
            <Table
              sx={{ minWidth: 650, width: "60%", border: 2, mb: 2 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">non-planet</TableCell>
                  <TableCell align="right">planet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Non-planet</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "darkblue" }}>
                    1199
                  </TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "white" }}>
                    <span style={{ color: "black" }}>11</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>planet</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "white" }}>
                    <span style={{ color: "black" }}>7</span>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ backgroundColor: "lightblue", color: "black" }}
                  >
                    680
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ textAlign: "center" }} colSpan={2}>
                    Predicted
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <img
            src={"/screenshot3.jpg"}
            alt="ML Model Results"
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: "8px",
              padding: "10px",
            }}
          />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
export default function Root() {
  // function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   {
  //     event.preventDefault();
  //     const formData = new FormData(event.currentTarget);
  //     console.log(formData.get("file"));
  //     fetch("http://localhost:3000/mldata", {
  //       method: "POST",
  //       body: formData.get("file"),
  //     }).then((res) => console.log(res));
  //   }
  // }
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
            width: "80%",
          }}
        >
          <BasicTabs />
        </Box>
        <h1>Link to Google Colab for AI algorithm</h1>
        <Link
          variant="body2"
          href = "https://colab.research.google.com/drive/1I8Q2lVoHAbS0xaxfoKdx1JkigFqWU0hu?usp=sharing"
          sx = {{marginBottom:5}}
        >
          Click Here!
        </Link>
      </section>
    </>
  );
}
