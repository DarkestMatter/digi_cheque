import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Router.css";
import { Dashboard } from "./components/login";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/gallery/:galleryType" element={<Gallery />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
