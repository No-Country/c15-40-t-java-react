package com.NoCountry.educ.ar.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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

    @NotNull(message = "El nombre de la institución es obligatorio")
    @NotEmpty(message = "El nombre de la institución es obligatorio")
    @Size(min = 10, max = 40, message = "El nombre de la institución es obligatorio")
    private String institutionName;

    @NotNull(message = "La dirección de la institución es obligatoria")
    @NotEmpty(message = "La dirección de la institución es obligatoria")
    private String address;

    @NotNull(message = "La ciuidad de la institución es obligatoria")
    @NotEmpty(message = "La ciuidad de la institución es obligatoria")
    private String city;

    @NotNull(message = "")
    private String phone;

    @NotNull(message = "Email de la institución es obligatorio")
    @NotEmpty(message = "Email de la institución es obligatorio")
    @Email(message = "Email no válido", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    @Indexed(unique = true)
    private String email;

    @NotNull(message = "Es necesario crear una contraseña")
    @NotEmpty(message = "Es necesario crear una contraseña")
    @Size(min = 8, message = "La contraseña debe contener 8 o más dígitos")
    private String password;

    @Indexed(unique = true)
    @NotNull(message = "Es necesario cargar el codigo CUE")
    @NotEmpty(message = "Es necesario cargar el codigo CUE")
    @Size(min = 9,max = 9,message = "El CUE debe contener exactamente 9 dígitos")
    private String cue;

    @NotNull(message = "Es necesario una foto de su DNI")
    @NotEmpty(message = "Es necesario una foto de su DNI")
    private String image;

    @NotNull(message = "Su nombre y apellido son necesarios")
    @NotEmpty(message = "Su nombre y apellido son necesarios")
    private String nameOfUser;

    @NotNull(message = "Su ocupación en la institución es necesario")
    @NotEmpty(message = "Su ocupación en la institución es necesario")
    private String userOccupation;

    private boolean alta = false;

    public User(String institutionName, String address, String city, String phone, String email, String password,
            String cue, String image, String nameOfUser, String userOccupation) {
        this.institutionName = institutionName;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.cue = cue;
        this.image = image;
        this.nameOfUser = nameOfUser;
        this.userOccupation = userOccupation;
    }
}