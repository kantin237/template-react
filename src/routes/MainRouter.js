import React from 'react'
import {HashRouter, Route} from 'react-router-dom'

import HomeScreen from '../layout/HomeScreen'
import Menu from '../_shared/header/Menu'


export default function MainRouter() {
    return (
        <HashRouter>
            <Route path="/menu" component={Menu}/>
            <Route path="/home" component={HomeScreen}/>
        </HashRouter>
    )
}
