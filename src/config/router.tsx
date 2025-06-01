import React from "react";
import { HomePage } from "../pages/HomePage";
import { MoreProjects } from "../pages/MoreProjects";

export const routerConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "projects",
    element: <MoreProjects />,
  },
];
