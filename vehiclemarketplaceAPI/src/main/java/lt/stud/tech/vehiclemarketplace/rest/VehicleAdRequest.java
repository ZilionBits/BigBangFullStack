package lt.stud.tech.vehiclemarketplace.rest;

import lombok.Data;

@Data
public class VehicleAdRequest {

    private String brand;
    private String model;
    private String image;
    private int price;

}
