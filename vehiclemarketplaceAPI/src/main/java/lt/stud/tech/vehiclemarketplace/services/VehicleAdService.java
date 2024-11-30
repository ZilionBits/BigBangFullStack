package lt.stud.tech.vehiclemarketplace.services;

import lt.stud.tech.vehiclemarketplace.model.VehicleAd;
import lt.stud.tech.vehiclemarketplace.rest.VehicleAdRequest;

import java.util.List;

public interface VehicleAdService {

    List<VehicleAd> getAd();
    VehicleAd addAd(VehicleAdRequest vehicleAdRequest);
    VehicleAd updateAd(VehicleAdRequest vehicleAdRequest, Long id);
    void removeAd();
}
