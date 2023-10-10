import React, { useState } from "react";
import Header from "../components/Header";
import { SimpleFooter } from "../components/Footer";

function AnimeGridCard() {
  const [animeDescriptionsVisible, setAnimeDescriptionsVisible] = useState(
    Array(8).fill(false)
  );

  const toggleDescription = (idx: number) => {
    const newDescriptionsVisible = [...animeDescriptionsVisible];
    newDescriptionsVisible[idx] = !newDescriptionsVisible[idx];
    setAnimeDescriptionsVisible(newDescriptionsVisible);
  };

  const hideDescription = (idx: number) => {
    const newDescriptionsVisible = [...animeDescriptionsVisible];
    newDescriptionsVisible[idx] = false;
    setAnimeDescriptionsVisible(newDescriptionsVisible);
  };

  const renderAnimeImages = [
    "/anime1.jpg",
    "/Dragon.jpg",
    "/SAO.jpg",
    "/Bleach.jpg",
    "/AOT.jpg",
    "/SPY.jpg",
  ];

  const animes = [
    {
      title: "The Seven Deadly Sins: The Movie - Cursed by Light",
      imageSrc: renderAnimeImages[0],
      description:
        "Após os emocionantes acontecimentos da quarta e última temporada, a tão esperada continuação de 'The Seven Deadly Sins' está prestes a chegar. Com o título 'The Seven Deadly Sins: Cursed by Light', este emocionante filme teve seu pôster oficial revelado recentemente. A data marcada para o lançamento nos cinemas japoneses é o dia 2 de julho. Empolgantemente, esta obra é uma criação original do próprio autor da série, Nakaba Suzuki. Prepare-se para mergulhar em um novo capítulo repleto de ação e aventura!",
      trailerUrl: "https://www.youtube.com/watch?v=70HfDVk6tNs",
    },
    {
      title: "Dragon Ball Super - Super Hero",
      imageSrc: renderAnimeImages[1],
      description:
        "Um novo vilão ameaça a Terra, e Gohan e Piccolo devem se unir para derrotá-lo. Em 2023, a Força Red Ribbon, uma organização maligna que foi derrotada por Goku no passado, ressurge com dois novos andróides, Gamma 1 e Gamma 2. Os andróides são superpoderosos e começam a atacar os Guerreiros Z. Gohan, que agora é um pai e professor, é convocado para ajudar Piccolo a enfrentar os andróides. Gohan está fora de forma, mas Piccolo o treina para que ele possa recuperar seu poder. Os andróides são muito poderosos para Gohan e Piccolo sozinhos, mas eles conseguem derrotá-los com a ajuda de Goku e Vegeta.",
      trailerUrl: "https://www.youtube.com/watch?v=HNY3rlgfxvA",
    },
    {
      title: "Sword Art Online: Progressive - Scherzo of Deep Night",
      imageSrc: renderAnimeImages[2],
      description:
        "Mais de um mês se passou desde que 10.000 usuários ficaram presos dentro do mundo Sword Art Online. Asuna e Kirito lideram a jornada rumo à liberdade, mas uma rivalidade explosiva entre o Esquadrão de Libertação de Aincrad (ALS) e a Brigada dos Cavaleiros do Dragão (DKB) ameaça a sobrevivência de todos os jogadores. Nos bastidores, uma figura misteriosa manipula os eventos.",
      trailerUrl: "https://www.youtube.com/watch?v=PNVPbexLi48",
    },
    {
      title: "Bleach - Thousand-Year Blood War Arc",
      imageSrc: renderAnimeImages[3],
      description:
        "Bleach: Thousand-Year Blood War Arc é um arco de anime e mangá onde Ichigo Kurosaki e seus amigos lutam contra Yhwach, o rei dos Quincys. Uma rivalidade entre dois grupos de Shinigamis ameaça a todos. Yhwach planeja destruir o mundo.",
      trailerUrl: "https://www.youtube.com/watch?v=xS6F81CV6Sw&t=5s",
    },
    {
      title: "Attack on Titan: The Final Season - Part 3",
      imageSrc: renderAnimeImages[4],
      description:
        "Prepare-se para uma batalha épica que definirá o destino de toda a humanidade. Eren Yeager libera o poder supremo dos Titãs, desencadeando uma força imparável sobre o mundo. Com uma determinação ardente para eliminar todas as ameaças a Eldia, ele lidera um exército de Titãs Colossais rumo a Marley. Porém, nesta emocionante jornada, Eren enfrentará não apenas seus inimigos, mas também ex-companheiros agora em lados opostos. Uma equipe destemida está determinada a interromper sua missão mortal, mas a pergunta que ecoa no ar é: eles têm o que é preciso para detê-lo?",
      trailerUrl: "https://www.youtube.com/watch?v=Lg55bKlkeK4",
    },
    {
      title: "Spy x Family ",
      imageSrc: renderAnimeImages[5],
      description:
        "Prepare-se para mais aventuras emocionantes com a segunda temporada de Spy x Family! Acompanhe a história de um espião de elite, encarregado de uma missão crucial: formar uma família normal. No entanto, ele logo descobre que sua esposa é uma assassina habilidosa e sua filha tem poderes telepáticos. Juntos, eles embarcam em missões secretas enquanto mantêm seus segredos escondidos. Não perca a ação, a comédia e os mistérios nesta série que conquistou o Japão. Transmitida exclusivamente na Crunchyroll, novos episódios serão lançados a partir de 7 de outubro, com legendas e dublagem em todos os territórios.",
      trailerUrl: "https://www.youtube.com/watch?v=W2tMsaAVjD0",
    },
  ];

  return (
    <main className="container mx-auto p-4">
      <Header isAuthenticated={false} />

      <div className="my-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Novidades sobre animes</h2>
        <p>
          O segundo semestre de 2023 promete ser épico para os fãs de anime!
          Prepare-se para mergulhar em aventuras emocionantes com lançamentos
          que deixarão você ansioso por mais.
        </p>
        <p>
          Spy x Family: A família mais peculiar do mundo dos espiões está de
          volta! A segunda temporada de Spy x Family chega cheia de ação, com
          segredos, missões e muita comédia. Não perca as novas reviravoltas
          enquanto essa família disfuncional continua suas missões secretas.
        </p>
        <p>
          Attack on Titan: O destino do mundo está em jogo quando Eren e os
          Titãs entram em ação. A batalha final se aproxima, e os fãs podem
          esperar por um confronto épico que decidirá o futuro da humanidade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animes.map((anime, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md w-72">
            <img
              src={anime.imageSrc}
              alt={`Imagem do anime ${anime.title}`}
              className="h-100% w-full object-cover md:w-100%"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                {anime.title}
              </h2>
              {animeDescriptionsVisible[idx] ? (
                <div>
                  <p className="text-gray-700 mb-4">{anime.description}</p>
                  {anime.trailerUrl && (
                    <div>
                      <a
                        href={anime.trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Assistir ao Trailer
                      </a>
                    </div>
                  )}
                  <div className="mt-4">
                    <button
                      onClick={() => hideDescription(idx)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Ocultar Descrição
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => toggleDescription(idx)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Mostrar Descrição
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center">
        Estas são apenas algumas das emocionantes novidades que aguardam você no
        mundo dos animes no segundo semestre de 2023. Fique ligado para mais
        informações e prepare-se para uma temporada repleta de emoções e
        surpresas!
      </p>
      <SimpleFooter />
    </main>
  );
}

export default AnimeGridCard;
