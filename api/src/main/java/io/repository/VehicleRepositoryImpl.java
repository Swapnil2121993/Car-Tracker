package main.java.io.repository;

import javafx.scene.layout.Priority;
import main.java.io.entity.Alert;
import main.java.io.entity.Readings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import main.java.io.entity.Vehicle;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Repository
public class VehicleRepositoryImpl implements VehicleRepository {

    @Autowired
    @PersistenceContext
    private EntityManager entityManager;
    private Priority priority;

    VehicleRepository repository;
    Alert redlineRpm;
    Alert engineRpm;


    @Transactional
    public List<Vehicle> create(Vehicle vin) {
        List <Vehicle> list = new ArrayList();

        for (int i=0; i<list.size()-1; i++){    //update vehicle if with the same vin found
            if(list.get(i)==vin){
                entityManager.merge(vin);
            }
        }

//        create vehicle

        entityManager.persist(vin);
        return (List<Vehicle>)  vin;
    }

    public Vehicle findVehicle(Vehicle vin) {

        return entityManager.find(Vehicle.class, vin);
    }

    //   return list of alerts as one reading can have multiple alerts


    public List<Alert> getAlert(Alert alert) {
        return null;


//        if(engineRpm.isGreaterThan(redlineRpm) {
//                priority = Priority.HIGH;
//                return (<List>Alert) alert ;
//            }
    }



   }


