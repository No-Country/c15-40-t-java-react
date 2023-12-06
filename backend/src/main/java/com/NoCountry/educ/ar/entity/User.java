package com.NoCountry.educ.ar.entity;

import com.NoCountry.educ.ar.dto.UserRequestDTO;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
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
    @DBRef
    private PreInscription preInscriptionId;
    private String email;
    private String password;
    private boolean alta = false;

    public User(UserRequestDTO userRequestDTO) {
        this.email = userRequestDTO.email();
        this.password = userRequestDTO.password();
    }
}
