import React, {Component} from 'react';
import axios from 'axios';
import Vehicle from './Vehicle';

export default class VehicleList extends Component {
    constructor(){
      super(props);
      this.state={
        vehicleList:[],
      };
    }

    getInitialState(){
          return{
            vehicleList:[];
          }
    }

    componentDidMount(){
      var self=this;
      const url ="http://localhost:8080/api/vehicles";
      axios.get(url)
           .then(function(response){
             if(respose.data.results){
               self.setState({
                 vehicleList:response.data.results

               })
             }

          })
          .catch(function(error){

          });
    }

      render(){
        return (
          <div>
          <Vehicle vehicle={this.state.vehicleList} />
          </div>

        )
      }
  }
