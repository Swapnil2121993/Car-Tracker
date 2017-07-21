import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import LogIn from './components/LogIn/LogIn';
import Header from './common/Header';
import Vehicle from './components/Vehicle/Vehicle';
import Reading from './components/Reading/Reading';
import SimpleMap from './components/Map/Map';


export default(
                <Route path="/" component={App}>
                <IndexRoute component={App}/>
                <Route path="home" component={Header}/>
                <Route path="login" component={LogIn}/>
                <Route path="vehicle" component={Vehicle}/>
                <Route path= "reading" component={Reading}/>
                <Route path="location" component={SimpleMap}/>

                </Route>


)
