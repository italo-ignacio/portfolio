import React from "react";
import Login from "../../../src/pages/projects/pages/WebsitePatrimonies/website/pages/Login";
import Header from "../../../src/pages/projects/pages/WebsitePatrimonies/website/components/Header";
import { AuthProvider } from "../../../src/pages/projects/pages/WebsitePatrimonies/website/contexts/auth";
import GlobalStyles from "../../../src/pages/projects/pages/WebsitePatrimonies/website/styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

export default function websitePatrimonies() {
  return (
    <AuthProvider>
      <Header />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
      <Login />
    </AuthProvider>
  );
}
