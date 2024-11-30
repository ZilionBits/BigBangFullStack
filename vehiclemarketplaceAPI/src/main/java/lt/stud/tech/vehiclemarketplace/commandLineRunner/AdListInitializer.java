package lt.stud.tech.vehiclemarketplace.commandLineRunner;

import lt.stud.tech.vehiclemarketplace.model.VehicleAd;
import lt.stud.tech.vehiclemarketplace.repository.VehicleAdRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AdListInitializer implements CommandLineRunner {

    private final VehicleAdRepository vehicleAdRepository;

    public AdListInitializer(VehicleAdRepository vehicleAdRepository) {
        this.vehicleAdRepository = vehicleAdRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        VehicleAd ad1 = new VehicleAd();
        ad1.setBrand("Lamborghini");
        ad1.setModel("Urus");
        ad1.setImage("https://img.classistatic.de/api/v1/mo-prod/images/42/4297f4fc-070c-4c70-838b-b9ec96ca4896?rule=mo-1600.jpg");
        ad1.setPrice(210900);

        VehicleAd ad2 = new VehicleAd();
        ad2.setBrand("Mercedes-Benz");
        ad2.setModel("AMG GT");
        ad2.setImage("https://img.classistatic.de/api/v1/mo-prod/images/4f/4ff277d1-2982-4066-916a-db538367b831?rule=mo-1600.jpg");
        ad2.setPrice(324990);

        VehicleAd ad3 = new VehicleAd();
        ad3.setBrand("Porsche");
        ad3.setModel("992");
        ad3.setImage("https://img.classistatic.de/api/v1/mo-prod/images/8e/8efd0410-e9c3-4eda-bbf7-2dc2a5f1c50e?rule=mo-1600.jpg");
        ad3.setPrice(219980);

        VehicleAd ad4 = new VehicleAd();
        ad4.setBrand("Rolls-Royce");
        ad4.setModel("Cullinan");
        ad4.setImage("https://img.classistatic.de/api/v1/mo-prod/images/73/733c3205-7071-480b-a69b-d4f1f28b6fdd?rule=mo-1600.jpg");
        ad4.setPrice(490000);

        VehicleAd ad5 = new VehicleAd();
        ad5.setBrand("Mercedes-Benz");
        ad5.setModel("GLS 600");
        ad5.setImage("https://img.classistatic.de/api/v1/mo-prod/images/e2/e285dfac-f6a9-4a80-b500-6e6f97c27450?rule=mo-1600.jpg");
        ad5.setPrice(215000);

        VehicleAd ad6 = new VehicleAd();
        ad6.setBrand("Audi");
        ad6.setModel("RS6");
        ad6.setImage("https://img.classistatic.de/api/v1/mo-prod/images/e0/e0516efa-b965-4a15-9a10-fb9a6e4c0b4e?rule=mo-1600.jpg");
        ad6.setPrice(239990);

        vehicleAdRepository.save(ad1);
        vehicleAdRepository.save(ad2);
        vehicleAdRepository.save(ad3);
        vehicleAdRepository.save(ad4);
        vehicleAdRepository.save(ad5);
        vehicleAdRepository.save(ad6);
    }
}
