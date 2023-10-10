import React from "react";
import GridCard from "../components/GridCard";
import Header from ".././components/Header";
import { SimpleFooter } from ".././components/Footer";

const DestaqueFilmes: React.FC = () => {
  return (
    <main className="container mx-auto p-4">
      <Header isAuthenticated={false} />

      <section className="section">
        <article className="article text-center">
          <h2 className="text-3xl font-semibold mt-8 mb-4">
            Lançamentos do segundo semestre de 2023
          </h2>
          <p className="text-lg">
            O segundo semestre de 2023 é repleto de filmes aguardados pelo
            público, com produções de todos os gêneros e para os mais diferentes
            gostos. Entre os destaques estão:
          </p>
          <GridCard />
          <p className="text-lg mt-4">
            A expectativa é que esses filmes tragam grandes novidades para o
            público, seja em termos de história, personagens ou efeitos
            especiais.
          </p>
        </article>
      </section>
      <SimpleFooter />
    </main>
  );
};

export default DestaqueFilmes;
