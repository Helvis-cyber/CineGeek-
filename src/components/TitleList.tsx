import React, { useState, useRef } from "react";
import Modal from "react-modal";
import TitleForm from "./TitleForm";
import { Title } from "../types/Title";

interface TitleListProps {
  titles: Title[];
  onDelete: (id: number) => void;
  onEdit: (title: Title) => void;
}

const TitleList: React.FC<TitleListProps> = ({ titles, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState<Title | null>(null);
  const editPopupRef = useRef<HTMLDivElement | null>(null);

  const openModal = (title: Title) => {
    setIsModalOpen(true);
    setEditedTitle(title);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditedTitle(null);
    editPopupRef.current = null;
  };

  const handleSubmit = (title: Title) => {
    onEdit(title);
    closeModal();
    editPopupRef.current && editPopupRef.current.focus();
  };

  return (
    <div className="my-4">
      <ul>
        {titles.map((title) => (
          <li key={title.id} className="mb-4 p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{title.name}</h2>
            <p>Tipo: {title.type}</p>
            <p>Nota: {title.rating}/5</p>
            <p>Avaliação: {title.review}</p>
            <div className="mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 mr-2 rounded"
                onClick={() => openModal(title)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => onDelete(title.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Título"
        ref={editPopupRef}
      >
        {editedTitle && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Editar Título</h2>
            <TitleForm
              onSubmit={handleSubmit}
              onUpdate={handleSubmit}
              initialTitle={editedTitle}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TitleList;
