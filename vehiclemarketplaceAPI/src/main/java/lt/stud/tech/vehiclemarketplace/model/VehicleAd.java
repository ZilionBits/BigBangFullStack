package lt.stud.tech.vehiclemarketplace.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleAd {

    @Id
    @GeneratedValue
    private Long id;
    private String brand;
    private String model;
    private String image;
    private int price;

}
