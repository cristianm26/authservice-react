import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nomina';

const FormAdd = () => {
    const dispatch = useDispatch();
    const [viewForm, setViewForm] = useState(false);

    const [cantidadPago, setCantidadPago] = useState(
        {
            precioHora: 0,
            horas: 0
        }
    )
    const { precioHora, horas } = cantidadPago;
    const handleAdd = () => {
        setViewForm(!viewForm)

    }

    const handleChange = (e) => {
        setCantidadPago({
            ...cantidadPago,
            [e.target.name]: e.target.value
        })
    }
    const handleSave = () => {
        const cantidadFinal = horas * precioHora
        dispatch(crearRegistro(cantidadFinal))
        setCantidadPago({
            precioHora: 0,
            horas: 0
        })
    }
    return (
        <div>
            <button className="btn green" onClick={handleAdd}>
                {
                    !viewForm ? "Agregar" : "Cerrar"
                }

            </button>
            {
                viewForm && (
                    <>
                        <div >
                            <label htmlFor="icon_prefix1">Pago Por Hora:</label>
                            <input type="text" id="icon_prefix1" placeholder="Ingresa Cantidad por Pagar por Hora" onChange={handleChange} name="precioHora" value={precioHora} />


                            <label htmlFor="icon_prefix2">Horas Laboradas:</label>
                            <input type="text" id="icon_prefix2" placeholder="Ingresa Cantidad de Horas" value={horas} onChange={handleChange} name="horas" />
                            <button onClick={handleSave} className="btn purple">Calcular y Guardar</button>
                        </div>

                    </>
                )}
        </div>
    )
}

export default FormAdd
