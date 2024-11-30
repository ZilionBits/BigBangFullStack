package lt.stud.tech.vehiclemarketplace.controller;


import lt.stud.tech.vehiclemarketplace.model.VehicleAd;
import lt.stud.tech.vehiclemarketplace.services.VehicleAdService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/v1/vehicleAd")
public class VehicleAdController {

    private final VehicleAdService vehicleAdService;

    public VehicleAdController(VehicleAdService vehicleAdService) {
        this.vehicleAdService = vehicleAdService;
    }

    @GetMapping
    List<VehicleAd> getAd(){
        return vehicleAdService.getAd();
    }

}
