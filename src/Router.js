import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import Registration from "./Auth/Registration";
import Login from "./Auth/Login";
import Home from "./Home/Home";
import ForgotPassword from "./Auth/ForgotPassword";
import EmailVerfication from "./Auth/EmailVerfication";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "email-verfication",
        element: <EmailVerfication />,
      },
    ],
  },
]);
