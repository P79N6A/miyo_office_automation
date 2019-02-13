/**
 * Created by danyu on 3/4/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, IndexRoute } from 'react-router-dom';

import App from './Main.jsx';

// let {Router,Route,hashHistory,IndexRoute } =ReactRouter;

ReactDOM.render(
    <div style={{height:'100%'}}>
        <HashRouter >
            <Route path='/' component={App}/>
        </HashRouter>
    </div>
    , document.getElementById('container'));
