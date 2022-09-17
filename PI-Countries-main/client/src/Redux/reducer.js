//importar acciones
//definir estados iniciales
//definir reducer
//exportar reducer

let initialState = {                                                //estado inicial
    countries: [],
    activities: [],
    detail: [],
    filters: [],
    order: [],
    search: [],
};

export default function rootReducer(state = initialState, action) {
        switch (action.type) {
            case "GET_COUNTRIES":
                return {
                    ...state, countries: action.payload            //retornamos el estado anterior con la logica de la accion
                }
            case "GET_DETAIL":
                return {
                    ...state, detail: action.payload
                }
            case "GET_FILTERS":
                return {
                    ...state, filters: action.payload
                }
            case "GET_ORDER":
                return {
                    ...state, order: action.payload
                }
            case "GET_SEARCH":
                return {
                    ...state, search: action.payload
                }
            case "CREAR_ACTIVIDAD":
                return {
                    ...state, activities: action.payload
                }
            default:
                return state
        }
}
