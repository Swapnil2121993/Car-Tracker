import React, {Component} from 'react';
import LogIn from '../LogIn/LogIn';
import Signup from '../LogIn/Signup';
import logo from './cartracker.jpg';
import './Home.css';


 export default class Home extends Component {
    render(){
      return(
        <div className="imagecontainer">
          <h2 style={{marginRight:1250}}>Car-Tracking</h2>
          <h3 style={{marginRight:1250}}> Track your CAR </h3>

          <LogIn/>
          <Signup/>

          <img src={logo} alt=" "/>


        </div>





      )
    }

}
