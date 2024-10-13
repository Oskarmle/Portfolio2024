import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Start from "./pages/start";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
