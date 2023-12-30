/* eslint-disable react-refresh/only-export-components */
import React from "react";

import { RouteObject } from "react-router-dom";

import MainLayout from "../layouts/main-layout";

const Home = React.lazy(() => import("../pages/home"));

const mainRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default mainRoutes;
