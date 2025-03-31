import axios from "axios";
import md5 from "md5";

// Aquí defino la URL base y las claves como variables de entorno
const publicKey = process.env.PUBLIC_API_KEY;
const privateKey = process.env.PRIVATE_API_KEY;
const url = process.env.API_URL;

// Controlamos que las claves estén definidas
if (!publicKey || !privateKey) {
  throw new Error(
    "Las claves de la API no están definidas en las variables de entorno"
  );
}

// Función que realiza la llamada a la API
export const fetchMarvelData = async (endpoint: string) => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + privateKey + publicKey);

  try {
    const response = await axios.get(`${url}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        apikey: publicKey,
        hash: hash,
        ts: timestamp,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error de Axios:", error.response?.data);
    } else {
      console.error("Error desconocido:", error);
    }
    throw new Error(
      "Hubo un problema al hacer la solicitud a la API de Marvel"
    );
  }
};
