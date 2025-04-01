import { fetchMarvelData } from "./api/request";

export default async function Home() {
  try {
    const data = await fetchMarvelData("/characters"); // Llamamos al endpoint de personajes
    console.log(data.data.count);
    console.log(data.data.results);

    return (
      <div>
        <h1>Personajes de Marvel</h1>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener los personajes de Marvel:", error);
    return <div>Hubo un error al cargar los datos de los personajes.</div>;
  }
}
