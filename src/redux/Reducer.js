const initialState = {
  drinks: [],
  favoritos: [],
  loading: false,
  modalOpen: false,
  modalMessage: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUSQUEDA_START":
      console.log("BUSCANDO");
      return {
        ...state,
        loading: true,
      };
    case "BUSQUEDA_DONE":
      console.log("BUSQUEDA TERMINADA");
      return {
        ...state,
        drinks: action.data,
        loading: false,
      };
    case "BUSQUEDA_NO_RES":
      console.log("SIN RESULTADOS");
      return {
        ...state,
        loading: false,
      };
      case 'TOGGLE_FAVORITO':
        const drink = action.drink;
        const favoritos = state?.favoritos?.some((f) => f.idDrink === drink.idDrink)
          ? state.favoritos.filter((f) => f.idDrink !== drink.idDrink)
          : [...state.favoritos, drink];
        return { ...state, favoritos };
      case "ABRIR_MODAL":
        return {
          ...state,
          modalOpen: true,
          modalMessage: action.message,
        };
      case "CERRAR_MODAL":
        return {
          ...state,
          modalOpen: false,
          modalMessage: "",
        };
    default:
      return state;
  }
};

export default reducer;
