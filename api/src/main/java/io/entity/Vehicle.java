package main.java.io.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;
import java.util.UUID;

@Entity
public class Vehicle {

    @Id
    private String vin;

    private String company;
    private String model;
    private int year;
    private int redlineRpm;
    private int maxfuelVolume;



    @OneToMany
    private Readings reading;

    public Vehicle(){
        this.vin = UUID.randomUUID().toString();
    }


    public Readings getReading() {
        return reading;
    }

    public void setReading(Readings reading) {
        this.reading = reading;
    }



    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getRedlineRpm() {
        return redlineRpm;
    }

    public void setRedlineRpm(int redlineRpm) {
        this.redlineRpm = redlineRpm;
    }

    public int getMaxFuelVoulume() {
        return maxFuelVoulume;
    }

    public void setMaxFuelVoulume(int maxFuelVoulume) {
        this.maxFuelVoulume = maxFuelVoulume;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    private int maxFuelVoulume;
    private String date;

    public int getMaxfuelVolume() {
        return maxfuelVolume;
    }

    public void setMaxfuelVolume(int maxfuelVolume) {
        this.maxfuelVolume = maxfuelVolume;
    }
}
