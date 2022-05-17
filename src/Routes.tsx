import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const R: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" caseSensitive={false} element={<Home />} />
      <Route path="/catalog" caseSensitive={false} element={<Catalog />} />
    </Routes>
  </Router>
);

export default R;
