import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from "react-router-dom";

// Views
import Page404 from './views/Pages/Page404/';
import Page500 from './views/Pages/Page500/';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/404" name="Page 404" component={Page404}/>
            <Route exact path="/500" name="Page 500" component={Page500}/>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </Router>
), document.getElementById('root'));
//registerServiceWorker();
