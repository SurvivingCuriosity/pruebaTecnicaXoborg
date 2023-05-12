import React from "react";
import { buscarPorNombreAction } from "../redux/Actions";
import { useDispatch } from "react-redux";

export const FormBusqueda = () => {
  const dispatch = useDispatch();
  const [userText, setUserText] = React.useState("");
  
  const handleInput = (event) => {
    setUserText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(buscarPorNombreAction(userText, e));
  };

  return (
    <form className="w-full flex justify-stretch gap-4" onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        value={userText}
        type="search"
        placeholder="Nombre del coctel..."
        className="w-full h-8 rounded-md px-2"
      ></input>
      <input
        type="submit"
        className="h-8 bg-green-300 px-4 rounded-md"
        value="Buscar"
      ></input>
    </form>
  );
};
