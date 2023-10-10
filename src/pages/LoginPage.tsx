import React from "react";
import Login from "../components/Login";
import Header from "../components/Header";
import { SimpleFooter } from "../components/Footer";
function LoginPage() {
  return (
    <>
      <Header isAuthenticated={false} />

      <Login />
      <SimpleFooter />
    </>
  );
}

export default LoginPage;
