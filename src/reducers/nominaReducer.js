import { nominaTypes } from "../types/nominaTypes";
const initialState = {
    data: []
}
export const nominaReducer = (state = initialState, action) => {
    switch (action.type) {
        case nominaTypes.nominaAdd:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case nominaTypes.nominaRead:
            return {
                ...state,
                data: action.payload
            }
        case nominaTypes.nominaDelete:
            return {
                ...state,
                data: state.data.filter((nomina) => {
                    return nomina.id !== action.payload
                })
            }
        case nominaTypes.nominaClean:
            return {
                ...state,
                data: []
            }
        default:
            return state;
    }
};
