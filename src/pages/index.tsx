import Link from "next/link";
import Header from ".././components/Header";
import { SimpleFooter } from ".././components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div>
        <Header isAuthenticated={false} />
      </div>

      <div className="header text-center mt-8">
        <h2 className="text-3xl font-semibold">Sobre a Cine Geek</h2>
      </div>

      <section className="section my-8 pb-8">
        <article className="article text-center p-4">
          Bem-vindo ao Cine Geek, o seu destino definitivo para todos os
          fanáticos por cinema, séries e animes! Prepare-se para uma jornada
          emocionante pelos universos cinematográficos, mergulhe nas tramas
          cativantes das séries mais quentes e explore o mundo dos animes como
          nunca antes. No Cine Geek, você estará sempre um passo à frente,
          obtendo as últimas notícias, fofocas e atualizações do mundo
          cinematográfico, das telas de TV e dos emocionantes mundos dos animes.
          Desvende curiosidades intrigantes sobre seus filmes e séries favoritos
          e mergulhe em resenhas profundas dos lançamentos mais esperados. Seja
          você um cinéfilo, um viciado em séries ou um fã ávido de animes, o
          Cine Geek é o seu lar online, onde a paixão pelo entretenimento se
          torna realidade. Venha fazer parte da nossa comunidade e embarque
          conosco nesta emocionante jornada geek!
        </article>
      </section>

      <SimpleFooter />
    </main>
  );
}
