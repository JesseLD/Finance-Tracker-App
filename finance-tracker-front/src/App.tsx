import axios from "axios";
import { useEffect, useState } from "react";
import config from "./api/config";

interface Category {
  name: string;
  type: string;
  // Adicione outras propriedades conforme necessário
}

function App() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    getCategories();

    const intervalId = setInterval(() => {
      getCategories();
    }, 5000); // 5000 milissegundos = 5 segundos

    // Limpe o intervalo quando o componente for desmontado para evitar vazamento de memória
    return () => clearInterval(intervalId);
  }, []);
  async function getCategories() {
    const response = await axios.get(config.apiUrl + "/v0/Categories/List");
    console.log(response.data.data);
    setCategory(response.data.data);
  }

  return (
    <>
      <h1>Hello World</h1>
      <ul>
        <p>Categorias</p>
      {category.map(item => (
        <li key={item.name}>{item.name} - {item.type}</li>
      ))}
      </ul>
    </>
  );
}

export default App;
