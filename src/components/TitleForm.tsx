import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import mongoose from "mongoose";
import { Title } from "../types/Title";
interface TitleFormProps {
  onSubmit: (title: Title) => void;
  onUpdate?: (title: Title) => void;
  initialTitle?: Title;
}

const TitleForm: React.FC<TitleFormProps> = ({
  onSubmit,
  onUpdate,
  initialTitle,
}) => {
  const [title, setTitle] = useState<Title>(
    initialTitle || {
      id: 0,
      name: "",
      type: "",
      rating: 1,
      review: "",
    }
  );

  const sendDataToBackend = async (data: any) => {
    try {
      const response = await axios.post("https://web.postman.co/workspace/My-Workspace~61c0505f-5120-4cf3-89d9-418d1e21e0a5/request/29177367-0e6e86e4-62b7-4361-987f-44d08b1146fd", {
        ...data,
        id: new mongoose.Types.ObjectId(),
      });
      console.log("Dados enviados com sucesso para o backend:", response.data);
    } catch (error) {
      console.error("Erro ao enviar dados para o backend:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title.id === 0) {
      onSubmit(title);

      setTitle({
        id: 0,
        name: "",
        type: "",
        rating: 1,
        review: "",
      });

      sendDataToBackend(title);
    } else if (onUpdate) {
      onUpdate(title);

      setTitle({
        id: 0,
        name: "",
        type: "",
        rating: 1,
        review: "",
      });

      sendDataToBackend(title);
    }
  };

  useEffect(() => {
    setTitle(
      initialTitle || {
        id: 0,
        name: "",
        type: "",
        rating: 1,
        review: "",
      }
    );
  }, [initialTitle]);

  return (
    <div className="my-4 p-4 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">
            Nome do título <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            size="lg"
            value={title.name}
            onChange={(e) => setTitle({ ...title, name: e.target.value })}
            required
            crossOrigin="anonymous"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">
            Filme ou anime? <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            size="lg"
            value={title.type}
            onChange={(e) => setTitle({ ...title, type: e.target.value })}
            required
            crossOrigin="anonymous"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">
            Sua nota: <span className="text-red-500">*</span>
          </label>
          <select
            className="border rounded-lg p-2 w-full"
            value={title.rating}
            onChange={(e) =>
              setTitle({ ...title, rating: parseInt(e.target.value) })
            }
            required
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold">
            Sua avaliação <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Sua avaliação"
            className="border rounded-lg p-2 w-full"
            value={title.review}
            onChange={(e) => setTitle({ ...title, review: e.target.value })}
            required
          />
        </div>
        <Button type="submit" color="blue" size="lg" fullWidth>
          {title.id === 0 ? "Adicionar" : "Editar"}
        </Button>
      </form>
    </div>
  );
};

export default TitleForm;
