import React from "react";
import Home from "../../../src/pages/projects/pages/WebsitePatrimonies/website/pages/Home";
import Header from "../../../src/pages/projects/pages/WebsitePatrimonies/website/components/Header";
import { AuthProvider } from "../../../src/pages/projects/pages/WebsitePatrimonies/website/contexts/auth";
import GlobalStyles from "../../../src/pages/projects/pages/WebsitePatrimonies/website/styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import { GetServerSideProps } from "next";
import {
  Patrimony_,
  User,
  getAllPatrimonies,
  getAllUsers,
} from "../../../lib/db";

export const getServerSideProps: GetServerSideProps = async () => {
  const responsePatrimonies = await getAllPatrimonies();
  const responseUsers = await getAllUsers();
  return {
    props: {
      responsePatrimonies,
      responseUsers,
    },
  };
};

interface DataProps {
  responsePatrimonies: Patrimony_[];
  responseUsers: User[];
}

export default function websitePatrimonies({
  responsePatrimonies,
  responseUsers,
}: DataProps) {
  return (
    <AuthProvider>
      <Header />
      <GlobalStyles />
      <Home
        responsePatrimonies={responsePatrimonies}
        responseUsers={responseUsers}
      />
      <ToastContainer autoClose={3000} className="toast-container" />
    </AuthProvider>
  );
}
