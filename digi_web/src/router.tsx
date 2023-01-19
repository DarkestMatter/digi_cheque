import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Router.css";
import { Login } from "./components/login";
import { BankLogin } from "./components/bank/login";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/banklogin" element={<BankLogin />} />
        {/* <Route path="/gallery/:galleryType" element={<Gallery />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
