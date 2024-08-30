import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/complex/navigation";
import Frontpage from "./pages/frontpage";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navigation></Navigation>
      </Router>
    </div>
  );
}

export default App;
