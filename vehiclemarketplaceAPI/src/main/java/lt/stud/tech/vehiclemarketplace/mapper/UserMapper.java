package lt.stud.tech.vehiclemarketplace.mapper;


import lt.stud.tech.vehiclemarketplace.model.User;
import lt.stud.tech.vehiclemarketplace.rest.dto.UserDto;

public interface UserMapper {

    UserDto toUserDto(User user);
}
