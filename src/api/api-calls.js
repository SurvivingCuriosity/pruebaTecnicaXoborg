const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const buscarPorNombre = (nombre) => {
  return fetch(`${API_URL}/search.php?s=${nombre}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

