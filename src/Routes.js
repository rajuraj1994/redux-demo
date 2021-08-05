import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Cart from './redux-demo/Cart'
import Main from './redux-demo/Main'

const Routes = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/cart" component={Cart}/>
            </Switch>
        </Router>
            
        </>
    )
}

export default Routes
