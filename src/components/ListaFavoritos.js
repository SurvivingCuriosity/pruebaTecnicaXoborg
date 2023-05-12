import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorito } from "../redux/Actions";
import IconoMG from "./icons/IconoMG";
import { Link } from "react-router-dom";

export const ListaFavoritos = () => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos);

  const handleClickFavorito = (item) => {
    dispatch(toggleFavorito(item));
  };

  return (
    <>
      <ul className="p-3">
        <p className="text-green-300">FAVORITOS</p>
        {favoritos.map((item) => {
          return (
            <li
              key={item.idDrink}
              className="p-2 bg-gray-700 flex flex-row gap-4 rounded-xl relative"
            >
              <img
                src={item.strDrinkThumb}
                className="w-12 aspect-square rounded-xl"
              ></img>
              <div className="flex flex-col justify-between">
                <p className="text-green-300 text-xl">{item.strDrink}</p>
                <div>
                  <p className="text-gray-400 text-xs">{item.strCategory}</p>
                  <p className="text-gray-400 text-xs">{item.strAlcoholic}</p>
                </div>
                <picture
                  className="absolute top-2 right-2 hover:cursor-pointer"
                  onClick={()=>{handleClickFavorito(item)}}
                >
                  <IconoMG
                    megusta={
                      favoritos?.some((f) => f.idDrink === item.idDrink)
                        ? true
                        : false
                    }
                  />
                </picture>
                <Link
                  to={`/detalles/${item.idDrink}`}
                  className="text-green-300 text-xs absolute bottom-2 right-2"
                >
                  Ver detalles
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
