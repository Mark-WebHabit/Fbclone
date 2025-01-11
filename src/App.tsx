import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./outlets/Auth";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
