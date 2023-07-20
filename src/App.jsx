import Home from "./components/Home";
import ThankYou from "./components/ThankYou";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
