package com.NoCountry.educ.ar.entity;

import com.NoCountry.educ.ar.dto.UserRequestDTO;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
@Document(value = "users")
public class User  {

    @Id
    private String id;
    private String pre_inscription_id;
    private String email;
    private String password;
    private String image;
    private String username;
    private String userOccupation;
    private boolean alta = false;


    public User(UserRequestDTO userRequestDTO) {
        this.email = userRequestDTO.email();
        this.password = userRequestDTO.password();
        this.image = userRequestDTO.image();
        this.username = userRequestDTO.nameOfUser();
        this.userOccupation = userRequestDTO.userOccupation();
    }
}
