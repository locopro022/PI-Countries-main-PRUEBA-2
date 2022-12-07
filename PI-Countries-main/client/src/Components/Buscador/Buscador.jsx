import styles from './Buscador.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNameCountries, orderByPop, orderByName, getFilters, filterCountriesByRegion, searchCountryByActivity} from '../../Redux/actions';


function Buscador () {
    const dispatch = useDispatch()
    const effect = useEffect;
    //variables para la búsqueda de países y actividades
    const [ name, setName ] = useState('')
    let actName = useSelector(state => state.actName) //Nombres de actividades traídos de la BD
    const [ actvName, setActvName ] = useState([])    
     
    //handle barra de busqueda                                                 ok
    function handleImputSearch(el){
        el.preventDefault()
        setName(el.target.value)   
        console.log(name)  
    }
    //hanlde boton de busqueda                                                 ok
    function handleButonSearch(el){
        el.preventDefault()
        if(!name) return alert("Debes ingresar un pais")
        dispatch(getNameCountries(name))
        setName ("")
    }
    //handle para ordenar por nombre                                           ok
    function handleOnChange(e) {
        dispatch(orderByName(e.target.value))
    }
    //handle para ordenar por población                                         ok
    function handlePopulation(e) {
      dispatch(orderByPop(e.target.value))
  }
    
    //funcion handle de continentes                                            ok
     function handleFilterRegion(el){
        dispatch(filterCountriesByRegion(el.target.value))
        }
  
      //Obtengo los valores del filtro por actividades
      effect(() => {
        dispatch(getFilters('name'))
    }, [dispatch])

    //handle para filtrar por actividad                                         ok
    const searchActivity = (e) => {
        setActvName([...actvName, e.target.name])
        e.preventDefault();
        dispatch(searchCountryByActivity(e.target.value));
        console.log("activity y E", e)
    }  
    
    return (
        <div className={styles.Buscador}>
            <div className={styles.headers}>
                <div className={styles.headerActv}>
                    <h5>Por Actividades: </h5>
                </div>
                <div className={styles.headerPais}>
                    <h5>Por Países: </h5>
                </div>
         -   </div>
            <div className={styles.filtros}>
                <div className={styles.actividades}>                        
                    <div className={styles.contTitulos}><h3 className={styles.titulos} >Nombres
                        
                            <div className={styles.opciones}>
                                {actName?.map( e => {
                                        return (
                                            <div key={e.name}>
                                                <input type='radio' name='actividades' value={e.name} onClick={(e) => searchActivity(e)}/>
                                                <span>{e.name}</span>
                                                <br></br>
                                            </div>)})}
                            </div>
                        </h3>
                    </div>                    
                </div>
                <div className={styles.separador}></div>
                <div className={styles.paises}>
                    <div className={styles.contTitulos}><h3 className={styles.titulos}>Continentes                        
                         <div className={styles.opciones}>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}} value={'All'}/>Todos<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}}  value={'Europe'}/> Europe<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}}  value={'Asia'}/> Asia<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}}  value={'Africa'}/> Africa<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}}  value={'South America'}/> Sur America<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}}  value={'North America'}/> Norte America<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}}  value={'Oceania'}/> Oceania<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleFilterRegion(el)}}  value={'Antarctica'}/> Antartida<br></br>
                        </div>
                        </h3>                         
                    </div>
                </div>
                <div className={styles.paises}>
                <div className={styles.contTitulos}><h3 className={styles.titulos}>Poblacion
                        
                         <div className={styles.opciones}>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handlePopulation(el)}} value={'asc'}/>- Poblacion<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handlePopulation(el)}}  value={'desc'}/>+ Poblacion<br></br>                           
                        </div>
                        </h3>                         
                    </div> 
                    </div>
                    <div className={styles.paises}>
                    <div className={styles.contTitulos}><h3 className={styles.titulos}>Alfabetica
                        
                         <div className={styles.opciones}>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleOnChange(el)}} value={'asc'}/>Z-A<br></br>
                            <input type= 'radio' name="continents"  onChange={(el)=> {handleOnChange(el)}}  value={'desc'}/>A-Z<br></br>
                           
                        </div>
                        </h3>                         
                    </div>  
                    </div> 
                <div className={styles.buscar}>
                    <input className={styles.searchBox} onChange={(el) => handleImputSearch(el)} placeholder='Buscar...'></input>
                    <button className={styles.searchBtn} onClick={(el)=> handleButonSearch(el)}> Buscar </button>
                </div>               
            </div>
        </div>
    );
}
export default Buscador;