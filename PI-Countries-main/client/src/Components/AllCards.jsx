import React from "react";
//import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getCountries } from "../Redux/actions";
import { Link } from "react-router-dom";




export default function AllCards () {
    let estadoCards = useSelector((state) => state.countries)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(getCountries())}, [dispatch]) 
    console.log(estadoCards)
    return (
        <>
          <div>
              {(estadoCards.length > 0) ? estadoCards.map(ct => (
              <Link nameCommon={ct.nameCommon} to={`/countries/${ct.id}`} key={ct.id}>
              <Card nameCommon={ct.nameCommon} img={ct.img} key={ct.id}/>
              </Link>))
                : <h2>No hay datos</h2> }

                
          </div>
        </>
    )
} 

//en vez del h2 que esta en el map se puede poner una imagen como fondo de carga o un elemento que reporte un error 