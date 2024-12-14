import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Ensure this is the correct path to your HomePage component
import "./index.css";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
