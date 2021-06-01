import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/config';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import AppPage from '../pages/AppPage';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { Login } from '../actions/auth';
import { loadData } from '../helpers/loadData';
import { leerRegistros } from '../actions/nomina';
const AppRouter = () => {
    const dispatch = useDispatch();
    const [log, setLog] = useState(false)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(
            async (user) => {
                if (user) {
                    dispatch(Login(user.uid, user.displayName));
                    setLog(true)
                    const nominaData = await loadData(user.uid);
                    dispatch(leerRegistros(nominaData))
                } else {
                    setLog(false)
                }

            }
        )
    }, [dispatch])
    return (
        <Router>
            <Switch>
                {/*  <Route path="/auth" component={AuthRouter} /> */}
                <PublicRouter path="/auth" component={AuthRouter} log={log} />
                <PrivateRouter exact path="/" log={log} component={AppPage} />

            </Switch>
        </Router>



    )
}

export default AppRouter
