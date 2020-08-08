import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { Login } from './components';
import {
    MainContainer,
    CoffeeContainer,
    OrderContainer,
    DrinkContainer,
    DessertContainer,
    TeaContainer,
} from './Container';

function App() {
    return(
        <>
            <BrowserRouter>
                <Route exact path="/" component={MainContainer}/>
                <Route path="/CoffeeContainer" component={CoffeeContainer}/>
                <Route path="/OrderContainer" component={OrderContainer}/>
                <Route path="/TeaContainer" component={TeaContainer}/>
                <Route path="/DessertContainer" component={DessertContainer}/>
                <Route path="/DrinkContainer" component={DrinkContainer}/>
                <Route path="/Login" component={Login}/>
            </BrowserRouter>
        </>
    )
}

export default App;
