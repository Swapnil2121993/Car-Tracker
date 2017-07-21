import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import sortBy from 'lodash/sortBy';
import {table,Button} from 'react-bootstrap';

export default class Alert extends Component{
  constructor(props){
    super(props);
    this.state={
      sortVehicle:'',
      sortRecords:[],
    };

    this.onClickSort =  this.onClickSort.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleChange = (e) => {
  this.setState({[e.target.name]:e.target.value})
};

onClickSort = (e) => {
      e.preventDefault();
      const sortVehicle = this.state.sortVehicle;
      const sortRecords = sortBy(this.props.vehicle, function(){
        // condition for high alert for last two hours based on timestamp
      })
      this.setState({sortRecords});
}

  render(){
      let records = this.props.vehicle;
      const sortRecords=this.state.sortRecords;

      if(sortRecords.length>0){
        records=sortRecords;
      }

    return(
            <div>
            <input type="text"
             name="sortVehicle"
             value={this.state.sortVehicle}
             onChange={this.handleChange}
             />

             <Button onClick ={this.onClickSort} className="btn-btn-primary">SortByTime </Button>

             <table className="table table-hove">
             <th>Vin</th>
             <th>Make</th>
             <th>Model</th>
             <th>Year</th>
             <th>Red line rpm</th>
             <th>Max fuel Volume</th>
             <th>Last service date</th>

             {records.map((record) => {
                return(
                  <tr>
                  <td key={record.vin}>{record.vin}</td>
                  <td>{record.make}</td>
                  <td>{record.model}</td>
                  <td>{record.year}</td>
                  <td>{record.redlinerpm}</td>
                  <td>{record.lastservicedate}</td>
                  </tr>
                )
             })}


             </table>
            </div>

    )
  }
}

Alert.propTypes = {
  sortRecords: PropTypes.array.isRequired,
};

// static defaultProps = {
//   sortRecords:[],
// };
