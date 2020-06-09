import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Table from './Table';
import E from './E';

class Myrouter extends Component {

    render() {
        return (

            <BrowserRouter>
               <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/add">Add data</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Table} />
                    <Route exact path="/add" component={Form} />
                    <Route exact path="/edit/:id" component={E} />
                </Switch>
            </BrowserRouter>


        );
    }
}

export default Myrouter;