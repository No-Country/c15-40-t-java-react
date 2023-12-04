package com.NoCountry.educ.ar.entity;

import com.NoCountry.educ.ar.dto.UserRequestDTO;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
@Document(value = "pre_inscripcion")
public class User  {

    @Id
    private String id;
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
