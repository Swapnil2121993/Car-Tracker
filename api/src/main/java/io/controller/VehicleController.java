package main.java.io.controller;


import org.springframework.beans.factory.annotation.Autowired;
import main.java.io.entity.Vehicle;
import main.java.io.service.VehicleService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@ResponseBody

@CrossOrigin(origins="http://mocker.egen.io")
public class VehicleController {

    @Autowired

    VehicleService service;

    @RequestMapping(method= GET, value="/readings", consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Vehicle getVehicle(@RequestBody Vehicle v){
        return (Vehicle) (Vehicle) service.create(v);

    }

    @RequestMapping(method=RequestMethod.POST, value="/readings", consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Vehicle create(@RequestBody Vehicle v){
        return (Vehicle) (Vehicle) service.create(v);

    }

    @RequestMapping(method=RequestMethod.PUT, value="/vehicles", consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Vehicle update(@RequestBody Vehicle vin){
        return service.findVehicle(vin);
    }

}
