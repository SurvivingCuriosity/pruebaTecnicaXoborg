import React from 'react'
import { useSelector } from 'react-redux';
import { CardCoctel } from './CardCoctel';

export const ListaResultados = () => {

  const drinks = useSelector((state) => state.drinks);

  return (
    <ul className='my-6'>
        {drinks?.map(drink=>{
          return(
            <CardCoctel key={drink.idDrink} drink={drink}/>
          )
        })}
    </ul>
  )
}
