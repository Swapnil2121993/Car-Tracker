import React,{Component} from 'react';
import {table} from 'react-bootstrap';

export default class Vehicle extends Component{

  render(){

    let vehicleList = this.props.vehicle;

    return(
      <div>
          <table className="table table-hove">
          <th>Vin</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Red line rpm</th>
          <th>Max fuel Volume</th>
          <th>Last service date</th>

            <tbody>

          {vehicleList.map((vehicle) => {
            return(
                <tr>
                  <td key={vehicle.vin}>{vehicle.vin}</td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.redlinerpm}</td>
                  <td>{vehicle.lastservicedate}</td>

                </tr>

              );
            })}

            </tbody>
          </table>
      </div>

    )
  }
}
