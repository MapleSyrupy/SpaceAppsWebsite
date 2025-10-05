import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./layout.tsx";
import Root from "./routes/root.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Data from "./routes/data.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [{ path: "/", Component: Root },{path: "/data", Component: Data} ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
