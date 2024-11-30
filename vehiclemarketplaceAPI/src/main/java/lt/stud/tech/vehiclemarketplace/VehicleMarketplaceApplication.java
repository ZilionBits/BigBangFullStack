package lt.stud.tech.vehiclemarketplace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class VehicleMarketplaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(VehicleMarketplaceApplication.class, args);
	}

}
