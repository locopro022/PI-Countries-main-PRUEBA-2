import axios from 'axios';


export const getCountries = () => {
     return async (dispatch) => {                                               //retornamos un dispach asincrono
      let pedidoApi = await axios.get("http://localhost:3001/countries");       //hacemos pedido a la api
      dispatch({                                                                // despachamos la accion
        type: "GET_COUNTRIES",                                                  //establecemos el tipo de accion
        payload: pedidoApi.data                                                 //con el payload que es el resultado de la api
      })      
    } 
}


export const crearActividad = () => {
    return async (dispatch) => {                                                //retornamos un dispach asincrono
        let crearAct = await axios.post("http://localhost:3001/activities",     //hacemos pedido a la api
        {/* nameActivity, difficulty, duration, season, country */});                 //con los datos de la actividad
            dispatch({                                                          // despachamos la accion
                type: "CREAR_ACTIVIDAD",                                        //establecemos el tipo de accion
                payload: crearAct.data                                          //con el payload que es el resultado de la api
            }) 
        } 
}

