import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { SimpleFooter } from "../components/Footer";
export default function MoviesAPI() {
  const authorizationKey = process.env.API_KEY;

  const [data, setData] = useState([]);
  const [filmDescriptionsVisible, setFilmDescriptionsVisible] = useState(
    Array(8).fill(false)
  );

  const toggleDescription = (idx) => {
    const newDescriptionsVisible = [...filmDescriptionsVisible];
    newDescriptionsVisible[idx] = !newDescriptionsVisible[idx];
    setFilmDescriptionsVisible(newDescriptionsVisible);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              language: "pt-BR", // Defina o idioma para português
            },
            headers: {
              Accept: "application/json",
              Authorization: "process.env.API_KEY;",
            },
          }
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Erro ao fazer a chamada à API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header isAuthenticated={false} />
      <article className="article text-center">
        <h2 className="text-3xl font-semibold mt-8 mb-4">
          Filmes mais populares
        </h2>
        <p className="text-lg">
          Aqui estão os filmes mais populares da atualidade, abrangendo uma
          ampla variedade de gêneros para atender a todos os gostos. Quem mais
          está ansioso pelo início da nova trilogia de O Exorcista, um filme que
          ainda causa arrepios até hoje? A ansiedade está enorme, não é mesmo?
        </p>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((movie, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md w-72">
              <img
                className="h-100% w-full object-cover md:w-100%"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`Poster do filme ${movie.title}`}
              />
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-blue-500 mb-2">
                  {movie.title}
                </h2>
                {filmDescriptionsVisible[idx] ? (
                  <div>
                    <p className="text-gray-700 mb-4">{movie.overview}</p>
                    <div>
                      <a
                        href={`https://www.themoviedb.org/movie/${movie.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Saiba mais
                      </a>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => toggleDescription(idx)}
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
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      <SimpleFooter />
    </>
  );
}
