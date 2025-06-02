import { HashRouter, useRoutes } from "react-router-dom";

import { routerConfig } from "./config/router";

function RoutesWrapper() {
  return useRoutes(routerConfig);
}

function App() {
  return (
    <HashRouter>
      <RoutesWrapper />
    </HashRouter>
  );
}

export default App;
