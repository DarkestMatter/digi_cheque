import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./Router.css";
import { Login } from "./components/login";
import { BankLogin } from "./components/bank/login";
import Dashboard from "./components/dashboard";
import Authorization from './components/Authorization'
import React from "react";
import { UserDetails } from "./components/userDetails";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/banklogin" element={<BankLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/profile" element={<UserDetails />} />

        {/* <Route path="/gallery/:galleryType" element={<Gallery />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
