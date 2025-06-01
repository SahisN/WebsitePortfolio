import React from "react";
import { HomePage } from "../pages/HomePage";
import { MoreProjects } from "../pages/MoreProjects";

export const routerConfig = [
  {
    path: "/sahis-website-portfolio",
    element: <HomePage />,
  },
  {
    path: "/sahis-website-portfolio/projects",
    element: <MoreProjects />,
  },
];
