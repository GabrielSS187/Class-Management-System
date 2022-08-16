import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Pages
import { Home } from "../pages/home";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};