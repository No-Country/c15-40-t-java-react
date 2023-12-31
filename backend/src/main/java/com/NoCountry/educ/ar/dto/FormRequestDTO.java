package com.NoCountry.educ.ar.dto;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record FormRequestDTO(
    @NotBlank(message = "El nombre  de la institutción es necesario")
    @Length(min = 2, max = 40, message = "El nombre  de la institutción debe contener entre 2 y 40 caracteres")
    String institutionName,

    @NotBlank(message = "La dirección de la institución es necesaria")
    @Length(min = 6, max = 40, message = "La dirección de la institutción debe contener entre 6 y 40 caracteres")
    String address,

    @NotBlank(message = "La ciudad de la institución es necesaria")
    @Length(min = 3, max = 40, message = "La ciudad de la institutción debe contener entre 3 y 40 caracteres")
    String city,

    @NotEmpty(message = "Es necesario al menos un número de teléfono de la institución")
    List<
        @NotBlank(message = "Es necesario al menos un número de teléfono de la institución")
        @Length(min = 7, max = 20, message = "El número de teléfono debe contener al menos 7 digítos")
    String> phones,
    
    @NotBlank(message = "El CUE de la institución es  necesario")
    @Length(min = 9, max = 9, message = "El CUE debe contener 9 dígitos")
    String cue,

    @NotBlank(message = "El email de la institución es obligatorio")
    @Email(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$", message = "El formato del email no es válido")
    String email,

    @NotBlank(message = "Es necesario una contraseña")
    @Length(min = 5, max = 20, message = "La password debe contener de 5 a 20 caracteres") 
    String password
) {
}