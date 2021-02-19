import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import HomeScreen from '../layout/HomeScreen'
import Menu from '../_shared/header/Menu'
import Loading from '../_shared/loader/Loading'
import DefaultLayout from '../layout/DefaultLayout'

export default function Routes() {
    return (
        <HashRouter>
            <Route  path="/" component={DefaultLayout}/>
        </HashRouter>
    )
}
