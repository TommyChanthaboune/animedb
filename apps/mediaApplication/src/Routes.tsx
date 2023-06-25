import { Home } from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";
import { Add } from "./pages/Add/Add";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detail/:id" element={<Details />} />
    <Route path="/add" element={<Add />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export { AppRoutes };
