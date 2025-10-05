import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState, type ReactHTMLElement } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Accuracy</h1>
        <p>Accuracy:0.9615</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
}
export default function Root() {
  function onSubmit(event:React.FormEvent<HTMLFormElement>){ {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("file"))
    fetch("http://localhost:3000/mldata", {
      method: "POST",
      body: formData.get("file")
    }).then((res) => console.log(res));
  }
  }
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
        <h1>Upload your own Data!</h1>
        <form onSubmit={onSubmit}>
          <Input type="file" name = "file"/>
          <Button type="submit">Click to submit</Button>
        </form>
      </section>
    </>
  );
}
