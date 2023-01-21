import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./Router.css";
import { Login } from "./components/login";
import { BankLogin } from "./components/bank/login";
import Dashboard from "./components/dashboard";
import Authorization from "./components/Authorization";
import React from "react";
import { UserDetails } from "./components/userDetails";
import BankDetails from "./components/reciepent/bankDetails/bankDetails";
import VerifyOtp from "./components/reciepent/bankDetails/verifyOtp";
import OtpVerificationSuccessfull from "./components/reciepent/bankDetails/otpVerificationSuccessfull";
import OtpVerificationFailled from "./components/reciepent/bankDetails/otpVerificationFailled";
import PrivateRoute from "./components/routing/PrivateRoute";
import { Navbar } from "./components/dashboard/Navbar";


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: 120 }}></div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/banklogin"
          element={
            <PrivateRoute>
              <BankLogin />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/auth"
          element={
            <PrivateRoute>
              <Authorization />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        />
        <Route path="/reciepent/:transId" element={<BankDetails />} />
        <Route
          path="/verifyotp"
          element={
            <PrivateRoute>
              <VerifyOtp />
            </PrivateRoute>
          }
        />

        <Route
          path="/otpVerificationSuccessfull"
          element={
            <PrivateRoute>
              <OtpVerificationFailled />
            </PrivateRoute>
          }
        />
        <Route
          path="/otpVerificationSuccessfull"
          element={
            <PrivateRoute>
              <OtpVerificationFailled />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
