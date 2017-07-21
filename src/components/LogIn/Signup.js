import React,{Component} from 'react';
import {browserHistory} from 'react-router';
import {Modal,Button} from 'react-bootstrap';

export default class Signup extends Component{
  constructor(props){
    super(props);
      this.state={
        firstName:" ",
        lastName:" ",
        address:" ",
        phone:" ",
        dob:" ",
        email:" ",
        open:false,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.close = this.close.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  };

  onClick = () => {
    browserHistory.push("login");
  }

  close = () => {
    this.setState({open:false})
  };

  handleClick = () => {
    this.setState({open:true})
  };

  render(){
    return(

            <div>
              <Button onClick={this.handleClick} className="btn-btn-primary" style={{marginLeft:750, marginBottom:20}}>SignUp </Button>
            <Modal
            show={this.state.open}
            onHide={this.close}
            aria-labelledby="ModalHeader"
            >

            <Modal.Header closeButton>
            <Modal.Title id="ModalHeader"> Signup Here</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="form-group">
            <label className="control-label"> FirstName </label>
            <input type="text"
            name="firstName"
            onChange={this.onChange}
            value={this.state.firstName}
            />
            </div>
            <br/>

            <div className="form-group">
            <label className="control-label"> LastName </label>
            <input type="text"
            name="lastName"
            onChange={this.onChange}
            value={this.state.lastName}
            />
            </div>
            <br/>

            <div className="form-group">
            <label className="control-label"> Address </label>
            <input type="text"
            name="address"
            onChange={this.onChange}
            value={this.state.address}
            />
            </div>
            <br/>

              <div className="form-group">
            <label className="control-label"> Phone</label>
            <input type="text"
            name="phone"
            onChange={this.onChange}
            value={this.state.phone}
            />
            </div>
            <br/>

            <div className="form-group">
            <label className="control-label"> DOB </label>
            <input type="date"
            name="dob"
            onChange={this.onChange}
            value={this.state.dob}
            />
            </div>
            <br/>

            <div className="form-group">
            <label className="control-label">Email </label>
            <input type="email"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            />
            </div>

            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.onClick} className="btn-btn-primary">Sign up </Button>
              <button onClick={this.close}>Close</button>
             </Modal.Footer>
            </Modal>
            </div>


    )
  }
}
