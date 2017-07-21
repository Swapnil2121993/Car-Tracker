import React,{Component} from 'react';
import './Header.css';

export default class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><h2> Car Tracking </h2></a>
          </div>

          <ul className="nav navbar-nav" style={{marginLeft:100}}>
            <li className="active"><a href="home">Home</a></li>
            <li><a href="vehicle">Vehicle</a></li>
            <li><a href="#">Reading</a></li>
            <li><a href="#">Alert</a></li>
            <li><a href="location">Maps</a></li>
            <li><a href="login">Logout</a></li>
        </ul>
    </div>
</nav>

    )
  }
}
