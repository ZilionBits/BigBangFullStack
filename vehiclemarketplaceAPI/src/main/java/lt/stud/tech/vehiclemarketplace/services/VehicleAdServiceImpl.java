package lt.stud.tech.vehiclemarketplace.services;

import lt.stud.tech.vehiclemarketplace.model.VehicleAd;
import lt.stud.tech.vehiclemarketplace.repository.VehicleAdRepository;
import lt.stud.tech.vehiclemarketplace.rest.VehicleAdRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleAdServiceImpl implements VehicleAdService{

    private final VehicleAdRepository vehicleAdRepository;

    public VehicleAdServiceImpl(VehicleAdRepository vehicleAdRepository) {
        this.vehicleAdRepository = vehicleAdRepository;
    }

    @Override
    public List<VehicleAd> getAd() {
        return vehicleAdRepository.findAll();
    }

    @Override
    public VehicleAd addAd(VehicleAdRequest vehicleAdRequest) {

        VehicleAd newVehicleAd = new VehicleAd();

        newVehicleAd.setBrand(vehicleAdRequest.getBrand());
        newVehicleAd.setModel(vehicleAdRequest.getModel());
        newVehicleAd.setImage(vehicleAdRequest.getImage());
        newVehicleAd.setPrice(vehicleAdRequest.getPrice());

        return newVehicleAd;
    }

    @Override
    public VehicleAd updateAd(VehicleAdRequest vehicleAdRequest, Long id) {
        return null;
    }

    @Override
    public void removeAd() {

    }
}
