import React from "react";
import { Typography } from "@material-tailwind/react";
import Header from ".././components/Header";

function TermosECondicoes() {
  return (
    <main>
      <Header isAuthenticated={false} />

      <div className="bg-blue-100 min-h-screen flex items-center justify-center">
        <div className="w-80 max-w-screen-lg sm:w-96">
          <Typography variant="h4" color="black">
            Termos e Condições de Uso
          </Typography>
          <Typography color="gray" className="mt-4">
            Bem-vindo aos Termos e Condições de Uso do nosso site. Estes termos
            regem o seu uso do nosso site e todos os serviços relacionados.
          </Typography>
          <Typography color="gray" className="mt-4">
            <strong>1. Aceitação dos Termos</strong>
            <br />
            Ao usar nosso site, você concorda com estes Termos e Condições e
            concorda em cumpri-los.
          </Typography>
          <Typography color="gray" className="mt-4">
            <strong>2. Uso Responsável</strong>
            <br />
            Você concorda em usar nosso site de maneira responsável e de acordo
            com todas as leis e regulamentos aplicáveis.
          </Typography>
          <Typography color="gray" className="mt-4">
            <strong>3. Privacidade</strong>
            <br />
            Nossa política de privacidade descreve como coletamos, usamos e
            protegemos suas informações pessoais. Ao usar nosso site, você
            concorda com nossa política de privacidade.
          </Typography>
          <Typography color="gray" className="mt-4">
            <strong>4. Alterações nos Termos</strong>
            <br />
            Reservamo-nos o direito de alterar estes Termos e Condições a
            qualquer momento. É sua responsabilidade revisar periodicamente os
            termos para estar ciente de quaisquer alterações.
          </Typography>
        </div>
      </div>
    </main>
  );
}

export default TermosECondicoes;
