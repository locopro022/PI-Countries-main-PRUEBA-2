import styles from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries } from '../../Redux/actions'
import MiniCard from '../MiniCard/MiniCard.jsx';
import Buscador from '../Buscador/Buscador.jsx';


function Home () {
    const effect = useEffect
    const dispatch = useDispatch()

    const countries = useSelector(state => state.countriesFiltrados)    //Guardo los países del reducer en una variable local
    //creo variables para el paginado
    const cardsFirstPage = 8 //Cantidad de cartas en la primer página. Uno menor que la cantidad deseada
    const cardsxPage = 10 //Cantidad de cartas por página
    const [min, setMin] = useState(0) //Determina el índice de countries por el que va a empezar el .map
    const [max, setMax] = useState(cardsFirstPage) //Determina el índice de countries hasta el cual va a llegar el .map. Uno menor que la cantidad deseada
    const [page, setPage] = useState(1) //Página actual
    
    effect(() => {
        dispatch(getCountries()) //Llama a los países
    }, [dispatch])


    effect(()=> { //Resetea los valores de paginado si la cantidad de países en countries cambia
        setMin(0)
        setMax(cardsFirstPage)
        setPage(1)

    },[countries.length, countries])

    effect( () => { //effect de botones de paginado
        if (page === 1) {
            document.querySelector('#pagAnt').className = styles.disabled
        }
        else document.querySelector('#pagAnt').className = styles.btn
        if (page > countries.length/10) {
            document.querySelector('#pagSig').className = styles.disabled
        }
        else document.querySelector('#pagSig').className = styles.btn
        
        console.log(page, countries.length/10)
    }, [page, countries.length])

    const paginaAnterior = () => {
        if (page > 2) { //Si la página es mayor a 2 reduce min y max en cardsxPage cantidades y resta 1 a la página
            setMin(min - cardsxPage)
            setMax(max - cardsxPage)
        }
        if (page === 2) { //Si la página es 2, setea el min y max a los valores iniciales
            setMin(0)
            setMax(cardsFirstPage)
        }
        if (page > 1) {
            setPage(page -1) //Evita que page llegue a valores menores a 1
        } 
    }

    const paginaSiguiente = () => {
        if (page === 1 && max < countries.length - 1) { // Si la pagina es la primera entonces setea el valor de min en max + 1 (9) y el de max en cardsxPage cantidades. Aumenta page en 1
            setMin(max + 1)
            setMax(max + cardsxPage)
            setPage(page + 1)
        }
        else if (max < countries.length - 1) { //Evita que page llegue a un valor más alto del necesario.
            setMin(min + cardsxPage)
            setMax(max + cardsxPage)
            setPage(page + 1)
        }
    }
    
    return (
        <div className={styles.Home}>
            <Buscador></Buscador>
            {
                countries?.map( (e, y) => {
                    if (y >= min && y <= max) return <MiniCard 
                    key={e.id} id={e.id} name={e.nameCommon} img={e.img} continent={e.continent} pobl={e.population} 
                    />
                    return null
                })
            }
            <div>
                <button id='pagAnt' className={styles.btn} onClick={paginaAnterior}>Anterior</button>
                <button id='pagSig' className={styles.btn} onClick={paginaSiguiente}>Siguiente</button>
            </div>
        </div>
    );
}

export default Home;