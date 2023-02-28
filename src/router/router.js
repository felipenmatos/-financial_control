import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../App";
import Home from "../page/Home";
import Register from "../page/Register";

function RouterPages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RouterPages;
