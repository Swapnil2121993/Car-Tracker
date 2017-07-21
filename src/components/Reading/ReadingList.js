import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import Reading from './Reading';

export default class vehicleReading extends Component {
    constructor(props){
      super(props);
      this.state={
        vehicleReadings:[]
      };
    }

    getInitialState(){
          return{
            vehicleReadings:[]
          };
    }

    componentDidMount(){
      axios.post("http://localhost:8080/api/readings",{
        Vin: 'vin',
      })
           .then(function(response){
             if(response.data.results){
               console.log(response.data.results)
               this.setState({
                 vehicleReadings:response.data.results

               })
             }

          })
          .catch(function(error){

          });
    }

      render(){
        return (
          <div>
          <Reading reading={this.state.vehicleReadings} />
          </div>

        )
      }
  }

  vehicleReading.propTypes={
    vehicleReadings:PropTypes.array.isRequired,
  };

  static defaultProps={
      vehicleReading:[],
  };
