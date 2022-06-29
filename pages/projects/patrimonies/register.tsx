import React from "react";
import Register from "../../../src/pages/projects/pages/WebsitePatrimonies/website/pages/Register";
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
      <Register />
    </AuthProvider>
  );
}
