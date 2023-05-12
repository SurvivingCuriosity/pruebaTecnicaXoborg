import React from 'react'
import { Navbar } from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import IconoMG from '../components/icons/IconoMG';
import { Link } from 'react-router-dom';
import { toggleFavorito } from '../redux/Actions';
export const PaginaDetalle = (props) => {
  const dispatch = useDispatch();
  const drinks = useSelector(state=>state.drinks);
  const favoritos = useSelector(state=>state.favoritos);
  const { id } = useParams();
  const drink = drinks.find(drink => drink.idDrink === id);

  const handleClickFavorito = () => {
    dispatch(toggleFavorito(drink));
}


  return (
    <>
      <Navbar />
      <div className="h-full py-7 px-2 flex flex-col justify-center xl:w-1/2 md:m-auto ">
        <div className='bg-gray-900 p-10 m-4 flex flex-col md:flex-row gap-4 relative'>
          <img src={drink.strDrinkThumb} className='w-60 rounded-xl m-auto'></img>
          <div className='flex flex-col justify-between'>
              <header className='flex flex-row my-7 justify-between items-center'>
                <p className='text-green-300 text-5xl'>{drink.strDrink}</p>
                  <div>
                    <p className='text-gray-400 text-s'>{drink.strCategory}</p>
                    <p className='text-gray-400 text-s'>{drink.strAlcoholic}</p>
                </div>
              </header>
              <p className='text-gray-100'>{drink.strInstructions}</p>
              <p className='text-green-300 text-3xl my-6'>Ingredients: </p>
              <ul className='text-gray-200 list-disc list-inside'>
                {drink.strIngredient1 && <li>{drink.strIngredient1}</li>}
                {drink.strIngredient2 && <li>{drink.strIngredient2}</li>}
                {drink.strIngredient3 && <li>{drink.strIngredient3}</li>}
                {drink.strIngredient4 && <li>{drink.strIngredient4}</li>}
                {drink.strIngredient5 && <li>{drink.strIngredient5}</li>}
              </ul>
              <picture className='absolute top-2 right-2 hover:cursor-pointer' onClick={handleClickFavorito}>
                  <IconoMG megusta={favoritos?.some(f => f.idDrink === drink.idDrink) ? true : false}/>
              </picture>
          </div>
        </div>
      </div>
      <Link to={`/`} className='text-green-300 text-xl p-4 w-full m-auto block text-center'>Volver</Link>
    </>
  )
}
