const initialState = {
    isOpen: false,
    message: "",
  };
  
  export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
      case ABRIR_MODAL:
        return {
          isOpen: true,
          message: action.payload.message,
        };
      case CERRAR_MODAL:
        return {
          isOpen: false,
          message: "",
        };
      default:
        return state;
    }
  };
  