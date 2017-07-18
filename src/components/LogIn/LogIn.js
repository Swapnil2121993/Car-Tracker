import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap';


export default class LogIn extends Component{
  constructor(props){
    super(props);
      this.state={
        username:"swapnil",
        password:"trivedi",
      };
      this.close=this.close.bind(this);
      this.onChange=this.onChange.bind(this);
      this.handleClick=this.handleClick.bind(this);
      this.onClick=this.onClick.bind(this);
    }

    close = () => {
      this.setState({open:false});
    }

    onChange=(e)=>{
      this.setState({[e.target.name]:e.target.value});
    }

    handleClick = () => {
      this.setState({open:true});
    }

    onClick=()=>{
      <Link to="home"/>
    }


    render(){
      return(
        <div>
        <Button type="button" style={{marginLeft:750}} className="btn-btn-primary" onClick={this.handleClick}> LogIn </Button>
        <Button type="button" className="btn-btn-primary"> SignUp</Button>

        <Modal
        show={this.state.open}
        onHide={this.close}
        aria-labelledby="ModalHeader"
        >

        <Modal.Header closeButton>
        <Modal.Title id="ModalHeader"> LogIn Here</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <input type="text"
        name="username"
        onChange={this.onChange}
        value={this.state.username}
        />

        <input type="password"
        name="password"
        onChange={this.onChange}
        value={this.state.password}
        />

        <Button type="button" className="btn-btn-primary" onClick={this.onClick}>Submit </Button>

        </Modal.Body>

        <Modal.Footer>
			    <button onClick={this.close.bind(this)}>
			        Close
			      </button>
			   </Modal.Footer>
        </Modal>
        </div>




    )
  }
}
