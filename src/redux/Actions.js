import { buscarPorNombre } from "../api/api-calls";
import store from './ReduxStore';

export const buscarPorNombreAction = (nombre) => async (dispatch) => {
    dispatch({ type: "BUSQUEDA_START" });
    const resultado = await buscarPorNombre(nombre);
    
    if (resultado.drinks === null) {
        dispatch({ type: "BUSQUEDA_NO_RES"});
    } else {
        dispatch({ type: "BUSQUEDA_DONE", data: resultado.drinks });
    }
};


export const toggleFavorito = (drink) => (dispatch, getState) => {
    const { favoritos } = getState();
    
    dispatch({type: "TOGGLE_FAVORITO", drink});
  
    if (favoritos.some((fav) => fav.idDrink === drink.idDrink)) {
        dispatch({ type: "ABRIR_MODAL", message: `${drink.strDrink} ha sido eliminado de tus favoritos.`});
    } else {
        dispatch({type: "ABRIR_MODAL", message: `${drink.strDrink} ha sido añadido a tus favoritos.`,
    });
    }
  };
  
