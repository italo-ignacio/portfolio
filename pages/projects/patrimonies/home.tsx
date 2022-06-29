import React from "react";
import Home from "../../../src/pages/projects/pages/WebsitePatrimonies/website/pages/Home";
import Header from "../../../src/pages/projects/pages/WebsitePatrimonies/website/components/Header";
import { AuthProvider } from "../../../src/pages/projects/pages/WebsitePatrimonies/website/contexts/auth";
import GlobalStyles from "../../../src/pages/projects/pages/WebsitePatrimonies/website/styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

export default function websitePatrimonies() {
  return (
    <AuthProvider>
      <Header />
      <GlobalStyles />
      <Home />
      <ToastContainer autoClose={3000} className="toast-container" />
    </AuthProvider>
  );
}
