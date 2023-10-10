import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://web.postman.co/workspace/My-Workspace~61c0505f-5120-4cf3-89d9-418d1e21e0a5/request/29177367-b6ee1509-0dc0-4baa-8d2d-3416512d2517", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login bem-sucedido");

        router.push("/titles");
      } else {
        console.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro na solicitação de login:", error);
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="black">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-black">
          Entre com seus dados de login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              type="email"
              size="lg"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              crossOrigin="anonymous"
              required
            />
            <Input
              type="password"
              size="lg"
              label="Senha"
              value={password}
              onChange={handlePasswordChange}
              crossOrigin="anonymous"
              required
            />
          </div>
          <Checkbox
            crossOrigin="anonymous"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal text-black"
              >
                Eu aceito os
                <Link
                  href="/Termos"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Termos e condições
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button onClick={handleLogin} className="mt-6" fullWidth color="blue">
            Login
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-black"
          >
            Não tem uma conta?{" "}
            <Link href="/Cadastro" className="font-medium text-gray-900">
              Cadastre-se
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Login;
