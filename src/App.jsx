import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { routerConfig } from "./config/router";

const router = createBrowserRouter(routerConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
