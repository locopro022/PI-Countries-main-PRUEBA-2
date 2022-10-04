import { GET_COUNTRIES,  
    GET_COUNTRY, 
    POST_ACTIVITY, 
    GET_NAME_COUNTRIES, 
    ORDER_BY_NAME, 
    ORDER_BY_POP, GET_FILTERS, FILTER_BY_REGION, SEARCH_COUNTRY_BY_ACTIVITY } from './actions';
  
//importar acciones
//definir estados iniciales
//definir reducer
//exportar reducer

let initialState = {                       //estado inicial
    countries: [],  //paises listados en Home
    country: {},    //Pais detallado en Detalles    
    activities: [],
    allCountries: [],
    countriesFiltrados: [], 
};


export default function rootReducer(state = initialState, { type, payload }) {
        switch (type) {
            //caso trae todos los paises                    ok
            case GET_COUNTRIES:
                return {
                    ...state,
                     countries: payload,  //retornamos el estado anterior con la logica de la accion
                     countriesFiltrados: payload,       //cargo todos los paises al estado de filtros para tenerlos disponibles
                     allCountries: payload,
                     country: {}        //seteamos el estado detail a vacio
                }

            //caso trae un pais por ID                                      ok
            case GET_COUNTRY:
                return {
                    ...state, country: payload             
                }

            //caso post de nueva actividad actividades                      ok
            case POST_ACTIVITY:
                return {
                    ...state, activities: payload
                }

            // caso get barra busqueda de pais por nombre                   ok  
            case GET_NAME_COUNTRIES:
                    return{
                        ...state,
                        countriesFiltrados: payload
                    }
            //caso ordenar por nombre                                       ok
            case ORDER_BY_NAME:
                var orderedCountries = [...state.countriesFiltrados]
                orderedCountries.sort((country1, country2)=> {
                if(country1.nameCommon > country2.nameCommon) {
                    return 1
                } 
                if (country1.nameCommon < country2.nameCommon) {
                    return -1
                } 
                return 0
                })
                if(payload==="asc"){
                orderedCountries = orderedCountries.reverse()
                }
                return{
                ...state,
                countriesFiltrados: [...orderedCountries]
                };

            //caso ordenar por poblacion                                    ok
            case ORDER_BY_POP:
                var orderedCountriesPop = [...state.countriesFiltrados]
                orderedCountriesPop.sort((country1, country2)=> {
                if(country1.population > country2.population) {
                    return 1
                } 
                if (country1.population < country2.population) {
                    return -1
                } 
                return 0
                })
                if(payload==="desc"){
                orderedCountriesPop = orderedCountriesPop.reverse()
                }
                return{
                ...state,
                countriesFiltrados: [...orderedCountriesPop]
                };

            //caso filtrar por continente                                   ok
          case FILTER_BY_REGION:
                    const allCountries = state.countries
                    const filterCountries = allCountries.filter(country => country.continent === payload)
                    const regionFilter = payload === 'All'? allCountries : filterCountries
                    /* console.log(regionFilter)
                    console.log(filterCountries) */
                    return{
                        ...state,
                        countriesFiltrados: regionFilter
                    }  
            //caso que renderiza los nombres de las activities              ok           
            case GET_FILTERS: {
                let key = ''
                if (payload.length > 0 && Object.keys(payload[0])[0] === 'name') key = 'actName'
                
                    return {
                        ...state,
                         [key]: payload
                    }}           
      
            //caso que renderiza el pais de la actividad seleccionado       ok
            case SEARCH_COUNTRY_BY_ACTIVITY:
            return {
                ...state,
                countriesFiltrados: payload ? payload : state.countries
            }
              default:
                return state
        }
}
