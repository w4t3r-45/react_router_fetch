import React from 'react';

export default function ItemDetails({match}){
  return(
    <>
    <h1>here we can just fetch item details based on id Below : </h1>
    <p>{match.params.id}</p>
    </>
  )
}