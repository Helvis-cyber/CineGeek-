import React, { useState } from "react";
import TitleList from "../components/TitleList";
import TitleForm from "../components/TitleForm";
import Header from "../components/Header";
import { SimpleFooter } from "../components/Footer";

interface Title {
  id: number;
  name: string;
  type: string;
  rating: number;
  review: string;
}

const TitlesPage: React.FC = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [editingTitle, setEditingTitle] = useState<Title | null>(null);

  const addTitle = (title: Title) => {
    const newTitle = { ...title, id: Date.now() };
    setTitles([...titles, newTitle]);
  };

  const editTitle = (title: Title) => {
    setEditingTitle(title);
  };

  const updateTitle = (updatedTitle: Title) => {
    setTitles((prevTitles) =>
      prevTitles.map((title) =>
        title.id === updatedTitle.id ? updatedTitle : title
      )
    );
    setEditingTitle(null);
  };

  const deleteTitle = (id: number) => {
    setTitles((prevTitles) => prevTitles.filter((title) => title.id !== id));
  };

  return (
    <div>
      <Header isAuthenticated={false} />

      <h1 className="text-3xl font-semibold mb-4 ml-4">Suas Avaliações</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2 ml-4">
            Adicionar/Editar Título
          </h2>
          <TitleForm
            onSubmit={addTitle}
            onUpdate={updateTitle}
            initialTitle={editingTitle}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Lista de Títulos</h2>
          <TitleList
            titles={titles}
            onDelete={deleteTitle}
            onEdit={editTitle}
          />
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default TitlesPage;
