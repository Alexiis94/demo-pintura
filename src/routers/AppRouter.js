import React from 'react'
import { NavBar } from '../ui/NavBar';
import { About } from '../components/about/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { Contact } from '../components/contact/Contact';
import { Main } from '../components/main/Main';
import { HeadContact } from '../components/contact/HeadContact';
import { Remodelacion } from '../components/remodelacion/Remodelacion';
import { Mantencion } from '../components/mantencion/Mantencion';


export const AppRouter = () => {
    return (
        <Router>
            <HeadContact />
            <NavBar />
                <Switch>
                    <Route  exact path="/about" component={About}/> 
                    <Route  exact path="/contact" component={Contact}/>
                    <Route  path="/remodelacion" component={Remodelacion}/> 
                    <Route  path="/mantencion" component={Mantencion}/> 
                    <Route  path="/main" component={Main}/> 
                    <Redirect to="/main" />
                </Switch>
        </Router>
    )
}
