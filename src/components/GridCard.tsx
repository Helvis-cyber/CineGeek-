
import React, { useState } from "react";

function GridCard() {
  const [filmDescriptionsVisible, setFilmDescriptionsVisible] = useState(
    Array(8).fill(false)
  );

  const toggleDescription = (idx: number) => {
    const newDescriptionsVisible = [...filmDescriptionsVisible];
    newDescriptionsVisible[idx] = !newDescriptionsVisible[idx];
    setFilmDescriptionsVisible(newDescriptionsVisible);
  };

  const hideDescription = (idx: number) => {
    const newDescriptionsVisible = [...filmDescriptionsVisible];
    newDescriptionsVisible[idx] = false;
    setFilmDescriptionsVisible(newDescriptionsVisible);
  };

  const renderFilmImages = [
    "/hungergames.jpg",
    "/The_marvels_poster.jpg",
    "/aquaman2.jpg",
    "/Turma.jpg",
    "/freira2.jpg",
    "/Poster-x.png",
    "/mercenarios4.jpg",
    "/missao.jpg",
    "/exorcista.jpeg",
  ];
  const filmes = [
    {
      title: "Jogos Vorazes - A cantiga dos passaros e das serpentes",
      imageSrc: renderFilmImages[0],
      description:
        "É um futuro filme de ação e ficção científica americano dirigido por Francis Lawrence a partir de um roteiro de Michael Arndt, baseado no romance The Ballad of Songbirds and Snakes de 2020 de Suzanne Collins. O filme é uma prequência da série de filmes Jogos Vorazes, e será produzido por Nina Jacobson e Brad Simpson. O filme está programado para ser lançado nos Estados Unidos em 17 de Novembro de 2023.",
      trailerUrl: "https://www.youtube.com/watch?v=Zw3QtH64Fxc",
    },
    {
      title: "As Marvels",
      imageSrc: renderFilmImages[1],
      description:
        "As Marvels é um próximo filme de super-heróis dos EUA baseado nas personagens Carol Danvers, Kamala Khan e Monica Rambeau da Marvel Comics. Dirigido por Nia DaCosta e estrelado por Brie Larson, Teyonah Parris e Iman Vellani, o filme é a sequência de Capitã Marvel (2019) e faz parte do Universo Cinematográfico Marvel. Na trama, Carol, Kamala e Monica trocam de lugar quando usam seus poderes e precisam se unir.",
      trailerUrl: "https://www.youtube.com/watch?v=YxL9wTkEgSY",
    },
    {
      title: "Aquaman e o reino perdido",
      imageSrc: renderFilmImages[2],
      description:
        "Quando um ancestral poder é desencadeado, Aquaman embarca em uma arriscada aliança com um improvável aliado para salvar Atlântida e o mundo da iminente devastação. O filme está programado para lançamento no Brasil em 25 de dezembro de 2023, com direção de James Wan e um orçamento de 205 milhões de dólares. O roteiro é assinado por David Leslie Johnson, com atuações de Jason Momoa, que também é um dos autores do filme, ao lado de James Wan e David Leslie Johnson.",
      trailerUrl: "https://www.youtube.com/watch?v=wG5WCP2MTkY",
    },
    {
      title: "Turma da Mônica Jovem - Reflexos do Medo",
      imageSrc: renderFilmImages[3],
      description:
        "Turma da Mônica Jovem: Reflexos do Medo é um futuro filme brasileiro baseado na série de HQs Turma da Mônica Jovem de Maurício de Sousa, produzido pela Bronze Filmes, em coprodução com a Mauricio de Sousa Produções, e Rubi Produtora como produtora associada. O filme será distribuído pela Imagem Filmes. Com data de lançamento mundial em 28 de dezembro de 2023, os diretores são Mauricio Eça e Christiano Metri, com roteiro de Sabrina Garcia. Esta aguardada adaptação promete encantar o público de todas as idades.",
      trailerUrl: "https://www.youtube.com/watch?v=1BRT-CoT6zg",
    },
    {
      title: "A Freira 2",
      imageSrc: renderFilmImages[4],
      description:
        "Em uma atmosfera carregada de suspense, viajamos até a França de 1956, onde um terrível assassinato de um padre lança sombras sinistras. Uma aura de mal parece se espalhar e, determinada a enfrentar o desconhecido, a destemida irmã Irene se vê diante de uma força demoníaca aterrorizante. Prepare-se para essa jornada aterradora que chegará aos cinemas brasileiros em 7 de setembro de 2023, sob a direção habilidosa de Michael Chaves. Com um orçamento de 38 milhões de dólares, este filme promete arrepios e suspense de tirar o fôlego.",
      trailerUrl: "https://www.youtube.com/watch?v=0JZ8WGVSrwM",
    },
    {
      title: "Jogos Mortais X",
      imageSrc: renderFilmImages[5],
      description:
        "Em busca de uma cura miraculosa, John Kramer, já debilitado pela doença, viaja para o México para um procedimento médico arriscado e experimental. No entanto, ao chegar ao seu destino, depara-se com um cenário sinistro, descobrindo que toda a operação é uma cruel artimanha destinada a enganar indivíduos já em situações vulneráveis. Agora, munido de um novo propósito, o infame serial killer emprega armadilhas insanas e engenhosas para inverter o jogo contra os impostores, reacendendo sua fama como o temível vilão Jigsaw. Este intrigante enredo chega aos cinemas brasileiros em 28 de setembro de 2023, sob a direção de Kevin Greutert. Prepare-se para um suspense eletrizante.",
      trailerUrl: "https://www.youtube.com/watch?v=9F-aGt8_1aQ",
    },
    {
      title: "Os Mercenários 4",
      imageSrc: renderFilmImages[6],
      description:
        "A equipe enfrenta um traficante de armas que comanda um vasto exército privado, armado com uma variedade inimaginável de armas. Os Mercenários emergem como a derradeira linha de defesa do mundo. Com data de lançamento no Brasil marcada para 21 de setembro de 2023, o filme é dirigido por Scott Waugh. A produção é assinada por Jason Statham, Kevin King Templeton, Yariv Lerner e Les Weldon, com um orçamento de 100 milhões de dólares. A Vértice Cine e a Millennium Films são as empresas produtoras, enquanto a distribuição fica a cargo da Lionsgate. Prepare-se para uma emocionante aventura de ação.",
      trailerUrl: "https://www.youtube.com/watch?v=A_NCT9MgxPs",
    },
    {
      title: "Missão: Impossível - Acerto de Contas Parte 1",
      imageSrc: renderFilmImages[7],
      description:
        "Ethan Hunt, o carismático agente do FMI, está de volta em uma emocionante missão repleta de ação em Missão Impossível - Acerto de Contas Parte 1, o sétimo capítulo dessa icônica série de filmes. Prepare-se para uma jornada eletrizante nas telas dos cinemas. Com data de lançamento marcada para o dia 13 de julho de 2023 no Brasil, sob a habilidosa direção de Christopher McQuarrie, o filme já arrecadou impressionantes 567,5 milhões de dólares em bilheteria, testemunho do seu apelo global. A cinematografia, cuidadosamente conduzida por Fraser Taggart, promete proporcionar uma experiência visual deslumbrante. Esta produção é fruto do trabalho conjunto de talentos como Tom Cruise, Christopher McQuarrie e J. J. Abrams. Baseado na amada franquia Mission: Impossible criada por Bruce Geller, esta aventura promete ser um marco no gênero de filmes de ação. Prepare-se para uma dose de adrenalina e intriga que manterá você à beira da poltrona.",
      trailerUrl: "https://www.youtube.com/watch?v=X1XX3a3t92k",
    },
    {
      title: "O exorcista - O devoto",
      imageSrc: renderFilmImages[8],
      description:
        "O Exorcista - O Devoto é o novo filme do diretor David Gordon Green, que traz de volta a história de terror clássica para uma nova geração. No filme, Victor Fielding, um padre devotado, percebe que sua filha Angela e sua amiga Katherine estão mostrando sinais de possessão demoníaca. Victor fará de tudo para salvar suas filhas do mal, mesmo que isso signifique enfrentar forças sobrenaturais. O filme tem estreia prevista para 6 de outubro de 2023 nos Estados Unidos e 20 de outubro de 2023 no Brasil.",
      trailerUrl: "https://www.youtube.com/watch?v=VfPUcwOP3So",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filmes.map((filme, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md w-72">
          <img
            className="h-100% w-full object-cover md:w-100%"
            src={filme.imageSrc}
            alt={`Poster do filme ${filme.title}`}
          />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              {filme.title}
            </h2>
            {filmDescriptionsVisible[idx] ? (
              <div>
                <p className="text-gray-700 mb-4">{filme.description}</p>
                {filme.trailerUrl && (
                  <div>
                    <a
                      href={filme.trailerUrl}
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
  );
}

export default GridCard;
