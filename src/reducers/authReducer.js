import { authTypes } from "../types/authTypes";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case authTypes.login:
            return action.payload
        case authTypes.logout:
            return {}

        default:
            return state;
    }
}