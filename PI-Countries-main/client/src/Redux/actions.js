import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const POST_ACTIVITY = 'POST'
export const GET_NAME_COUNTRIES = '"GET_NAME_COUNTRIES'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POP = 'ORDER_BY_POP'
export const GET_FILTERS = 'GET_FILTERS'
export const FILTER_BY_REGION = 'FILTER_BY_REGION'
export const BUSCAR_ACTIVIDAD = 'BUSCAR_ACTIVIDAD'
export const SEARCH_COUNTRY_BY_ACTIVITY = 'SEARCH_COUNTRY_BY_ACTIVITY'





//Ruta obtener todos los paises                             funciona ok
export function getCountries() {
    return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    return dispatch({
        type: "GET_COUNTRIES",
        payload: response.data,
    });
    };
}

//Ruta para obtener los detalles de un país                 funciona ok
export function getCountryDetail(id){
    return async function(dispatch){
        try{
            var detail = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: 'GET_COUNTRY',
                payload: detail.data
            })
        } catch(error) {
          console.log(error)
        }
      }
  }

//Añadir nueva actividad                                    funciona ok
export function addActivity(payload) {
    return async function (dispatch) {
      try {
        const response = await axios.post(`http://localhost:3001/activities`, payload);
        return dispatch({
          type: "POST",
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  //Barra de busqueda para paises                           funciona ok
  export function getNameCountries(nameCommon){
    return async function (dispatch) {
      try {
          if (nameCommon) {
              return axios.get('http://localhost:3001/countries?name=' + nameCommon)
                  .then(res => {
                      dispatch({
                          type: GET_NAME_COUNTRIES, 
                          payload: res.data 
                      })
                  })
                  .catch(err => dispatch({type: GET_NAME_COUNTRIES, payload: err.data}))
          }
          let json = await axios.get('http://localhost:3001/countries');
          return dispatch({
              type: GET_NAME_COUNTRIES,
              payload: json.data,
          })
      } catch(err){
          return err 
      }
  }
}
//Ordenar por nombre                                        funciona ok
export const orderByName = (alf) => {
    return{
        type: "ORDER_BY_NAME",
        payload: alf
    }
  };

//ordenar por poblacion                                   funciona ok
export const orderByPop = (order) => {
    return{
        type: "ORDER_BY_POP",
        payload: order
    }
};

//ordenar por continente                                  funciona ok
export function filterCountriesByRegion(payload){
  return{
      type: 'FILTER_BY_REGION',
      payload
  }
}



//Obtener nombres de actividades para el filtrado         
export const getFilters = (select) => {
  return async (dispatch) => {
      return fetch(`http://localhost:3001/activities/${select}`)
      .then( r => r.json())
      .then( r => dispatch({type: GET_FILTERS, payload: r}))
  }
}





export const getActivity = (name) =>{
  return async (dispatch) =>{
      const result = await axios.get(`http://localhost:3001/activities?nombre=${name}`);
      return dispatch({type: BUSCAR_ACTIVIDAD, payload: result.data})
  }
}

export const searchCountryByActivity = (activity) => {
  return function (dispatch) {
      return axios.get(`http://localhost:3001/activities?name=${activity}`)
          .then((data) => {
              console.log(data.data[0].countries)
              dispatch({
                  type: SEARCH_COUNTRY_BY_ACTIVITY,
                  payload: data.data[0].countries
              })
          })
          .catch((err) => {
              console.log(err);
          })
  }
}