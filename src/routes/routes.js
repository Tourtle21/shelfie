import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import Form from '../Components/Form/Form';

export default (
    <Switch>
        <Route path='/add' component={Form}/>
        <Route path='/edit/:id' component={Form}/>
        <Route exact path='/' component={Dashboard}/>
    </Switch>
);