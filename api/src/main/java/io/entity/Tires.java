package main.java.io.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Tires {

    @Id
    private String vin;

    private int frontleft;
    private int frontright;
    private int rearleft;

    public Tires(){
        this.vin= UUID.randomUUID().toString();
    }


    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public int getFrontleft() {
        return frontleft;
    }

    public void setFrontleft(int frontleft) {
        this.frontleft = frontleft;
    }

    public int getFrontright() {
        return frontright;
    }

    public void setFrontright(int frontright) {
        this.frontright = frontright;
    }

    public int getRearleft() {
        return rearleft;
    }

    public void setRearleft(int rearleft) {
        this.rearleft = rearleft;
    }

    public int getRearright() {
        return rearright;
    }

    public void setRearright(int rearright) {
        this.rearright = rearright;
    }

    private int rearright;
}