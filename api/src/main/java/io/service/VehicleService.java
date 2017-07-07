package main.java.io.service;

import main.java.io.entity.Vehicle;

import java.util.List;

public interface VehicleService {
    List<Vehicle> create(Vehicle v);
    Vehicle findVehicle(Vehicle vin);
}
