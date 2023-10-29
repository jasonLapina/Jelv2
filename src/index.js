import "@fontsource/merriweather/300.css";
import "@fontsource/merriweather/400.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/merriweather/900.css";

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./Shared/Layout";
import HomePage from "./Home/HomePage";
// import Portfoliopage from "./Portfolio/Portfoliopage";

const Portfoliopage = lazy(() => import("./Portfolio/Portfoliopage"));

const theme = extendTheme({
  fonts: {
    heading: `'Merriweather', serif`,
    body: `'Merriweather', serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<div />}>
            <Portfoliopage />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
