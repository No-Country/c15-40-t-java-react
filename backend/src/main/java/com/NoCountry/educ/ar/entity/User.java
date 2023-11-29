package com.NoCountry.educ.ar.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
@Document(value = "pre_inscripcion")
public class User {

    @Id
    private String id;

    private String institution;
    private String address;
    private String city;

    @Indexed(unique = true)
    private String email;
    private String phone;

    @Indexed(unique = true)
    private String cue;
    private String image;

    private String password;
    private boolean alta;


}
