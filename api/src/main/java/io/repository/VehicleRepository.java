package main.java.io.repository;


import main.java.io.entity.Alert;
import main.java.io.entity.Vehicle;

import java.util.List;

public interface VehicleRepository {

    List<Vehicle> create(Vehicle v);
    Vehicle findVehicle(Vehicle vin);
    List<Alert> getAlert(Alert alert);


}
