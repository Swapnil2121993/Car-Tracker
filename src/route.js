import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import LogIn from './components/LogIn/LogIn';
import Header from './common/Header';

export default(
                <Route path="/" component={App}>
                <IndexRoute component={App}/>
                <Route path="home" component={Header}/>
                <Route path="login" component={LogIn}/>

                </Route>


)
