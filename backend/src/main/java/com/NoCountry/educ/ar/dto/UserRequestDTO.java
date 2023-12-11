package com.NoCountry.educ.ar.dto;

import com.NoCountry.educ.ar.util.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.mongodb.core.index.Indexed;

public record UserRequestDTO(
        @NotBlank(message = "El nombre  de la institutción es necesario")
        @Email(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$",
                message = "El formato del email no es válido")
        String email,
        @NotBlank(message = "El nombre  de la institutción es necesario")
        String password,
        @NotBlank(message = "El nombre  de la institutción es necesario")
        String username,

        Role role
) { 
}