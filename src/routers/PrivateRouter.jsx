import React from 'react'
import { Route, Redirect } from "react-router-dom";
const PrivateRouter = ({ log, component: Component, ...resto }) => {
    return (
        <Route {...resto} component={(props) => log ? <Component {...props} /> : <Redirect to="/auth" />} />
    )
}

export default PrivateRouter
