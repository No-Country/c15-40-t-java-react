package com.NoCountry.educ.ar.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
@Document(value = "pre_inscripcion")
public class User {

    @Id
    private String id;

    private String institutionName;

    private String address;

    private String city;

    private String phone;

    @Indexed(unique = true)
    private String email;

    private String password;

    @Indexed(unique = true)
    private String cue;

    private String image;

    private String nameOfUser;

    private String userOccupation;

    private boolean alta;
}