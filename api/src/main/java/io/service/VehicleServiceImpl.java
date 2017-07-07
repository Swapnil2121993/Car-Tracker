package main.java.io.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import main.java.io.entity.Vehicle;
import main.java.io.exception.BadRequestException;
import main.java.io.exception.ResourceNotFoundException;
import main.java.io.repository.VehicleRepository;
import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepository repository;

    @Transactional
    public List<Vehicle> create(Vehicle v) {

        Vehicle vehicle = (Vehicle) repository.create(v);
        if (vehicle != null) {
            throw new BadRequestException("entity with" +v+ "already exsist");
        }
        return repository.create(v);
    }

    @Transactional
    public Vehicle findVehicle(Vehicle vin) {
        Vehicle vehicle = repository.findVehicle(vin);

        if(vehicle==null){
            throw new ResourceNotFoundException("entity with" +vin+ "doesn't exsist");
        }
        return vehicle;
    }
}