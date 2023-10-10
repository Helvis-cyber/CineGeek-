import React from "react";
import { Cadastro } from ".././components/Cadastro";
import Header from "../components/Header";
import { SimpleFooter } from "../components/Footer";
function CadastroPage() {
  return (
    <>
      <Header isAuthenticated={false} />

      <Cadastro />
      <SimpleFooter />
    </>
  );
}

export default CadastroPage;
