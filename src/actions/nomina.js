import { db } from "../firebase/config";
import { nominaTypes } from "../types/nominaTypes";

export const crearRegistro = (pago) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const datos = {
            fecha: new Date().toLocaleDateString(),
            pago
        };
        const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);

        const id = await referencia.id;
        const newData = {
            ...datos, id
        }

        dispatch(crear(newData))
    }
}

export const leerRegistros = (data) => {
    return {
        type: nominaTypes.nominaRead,
        payload: data
    }
}

export const crear = (data) => {
    return {
        type: nominaTypes.nominaAdd,
        payload: data
    }
}

export const borrarRegistro = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        await db.doc(`${uid}/nominas/nomina/${id}`).delete();
        dispatch(borrar(id))
    }

}


export const borrar = (id) => {
    return {
        type: nominaTypes.nominaDelete,
        payload: id
    }
}

export const limpiar = () => {
    return {
        type: nominaTypes.nominaClean
    }
}