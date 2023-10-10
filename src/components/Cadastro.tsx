import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Axios from "axios";

export function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCadastro = async () => {
    try {
      const response = await Axios.post("https://web.postman.co/workspace/My-Workspace~61c0505f-5120-4cf3-89d9-418d1e21e0a5/request/29177367-2a9af4db-c8f2-4a8a-86ec-1247d3c299ba", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
      } else {
        alert("Erro no cadastro.");
      }
    } catch (error) {
      console.error("Erro na solicitação de cadastro:", error);
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="black">
          Cadastre-se
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-black">
          Insira seus dados de cadastro.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Nome"
              value={name}
              onChange={handleNameChange}
              crossOrigin="anonymous"
            />
            <Input
              size="lg"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              crossOrigin="anonymous"
            />
            <Input
              type="password"
              size="lg"
              label="Senha"
              value={password}
              onChange={handlePasswordChange}
              crossOrigin="anonymous"
            />
          </div>
          <Button
            onClick={handleCadastro}
            className="mt-6"
            fullWidth
            color="blue"
          >
            Cadastre-se
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-black"
          >
            Já possui uma conta?{" "}
            <Link href="/LoginPage" className="font-medium text-gray-900">
              Faça login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
