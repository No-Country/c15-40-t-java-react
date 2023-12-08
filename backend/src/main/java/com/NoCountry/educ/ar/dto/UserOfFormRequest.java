package com.NoCountry.educ.ar.dto;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.mongodb.core.index.Indexed;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserOfFormRequest(    
    @NotBlank(message = "El email de la institución es obligatorio")
    @Email(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$", message = "El formato del email no es válido")
    @Indexed(name = "pre_inscripcion_email_index_unique", unique = true)
    String email,

    @NotBlank(message = "Es necesario una contraseña")
    @Length(min = 5, max = 20, message = "La password debe contener de 5 a 20 caracteres") 
    String password
) {
    public UserOfFormRequest(FormRequestDTO formRequestDTO) {
        this(
            formRequestDTO.email(),
            formRequestDTO.password()
        );
    }

}
