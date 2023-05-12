import React from 'react'
import IconoMG from './icons/IconoMG';
import { Link } from 'react-router-dom';
import { toggleFavorito } from '../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
export const CardCoctel = ({drink}) => {
    const dispatch = useDispatch();

    const handleClickFavorito = () => {
        dispatch(toggleFavorito(drink));
    }

    const favoritos = useSelector((state) => state.favoritos);

  return (
    <li className='p-2 m-2 bg-gray-700 flex flex-row gap-4 rounded-xl relative'>
        <img src={drink.strDrinkThumb} className='w-24 rounded-xl'></img>
        <div className='flex flex-col justify-between'>
            <p className='text-green-300 text-xl'>{drink.strDrink}</p>
            <div>
                <p className='text-gray-400 text-xs'>{drink.strCategory}</p>
                <p className='text-gray-400 text-xs'>{drink.strAlcoholic}</p>
            </div>
            <picture className='absolute top-2 right-2 hover:cursor-pointer' onClick={handleClickFavorito}>
                <IconoMG megusta={favoritos?.some(f => f.idDrink === drink.idDrink) ? true : false}/>
            </picture>
            <Link to={`/detalles/${drink.idDrink}`} className='text-green-300 text-xs absolute bottom-2 right-2'>Ver detalles</Link>
        </div>
    </li>
  )
}
