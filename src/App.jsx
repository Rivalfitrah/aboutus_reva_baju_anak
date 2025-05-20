import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect dari '/' ke '/about' */}
        <Route path="/" element={<Navigate to="/about" replace />} />

        {/* Route yang sesungguhnya */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
