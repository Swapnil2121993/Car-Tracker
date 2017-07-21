import React, {Component,PropTypes} from 'react';
import axios from 'axios';
import Vehicle from './Vehicle';

export default class VehicleList extends Component {
    constructor(props){
      super(props);
      this.state={
        vehicleList:[]
      };
    }

    getInitialState(){
          return{
            vehicleList:[]
          };
    }

    componentDidMount(){
      axios.get("http://localhost:8080/api/vehicles")
           .then(function(response){
             if(response.data.results){
               console.log(response.data.results)
               this.setState({ vehicleList:response.data.results})
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

  VehicleList.propTypes={
    vehicleList: PropTypes.array.isRequired,
  };

  static defaultProps = {
      vehicleList:[],
  };
