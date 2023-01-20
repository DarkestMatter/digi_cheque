import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./Router.css";
import { Login } from "./components/login";
import { BankLogin } from "./components/bank/login";
import Dashboard from "./components/dashboard";
import Authorization from "./components/Authorization";
import React from "react";
import { UserDetails } from "./components/userDetails";
import { Navbar } from "./components/dashboard/Navbar";
import BankDetails from "./components/reciepent/bankDetails/bankDetails";
import VerifyOtp from "./components/reciepent/bankDetails/verifyOtp";
import OtpVerificationSuccessfull from "./components/reciepent/bankDetails/otpVerificationSuccessfull";
import OtpVerificationFailled from "./components/reciepent/bankDetails/otpVerificationFailled";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: 120 }}></div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/banklogin" element={<BankLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/profile" element={<UserDetails />} />
        <Route path="/reciepent" element={<BankDetails />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route
          path="/otpVerificationSuccessfull"
          element={<OtpVerificationSuccessfull />}
        />
        <Route
          path="/otpVerificationFailled"
          element={<OtpVerificationFailled />}
        />

        {/* <Route path="/gallery/:galleryType" element={<Gallery />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
