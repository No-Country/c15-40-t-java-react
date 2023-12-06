package com.NoCountry.educ.ar.dto;

import com.NoCountry.educ.ar.util.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.mongodb.core.index.Indexed;

public record UserRequestDTO(
    @NotBlank @Email
    @Indexed(name = "pre_inscripcion_email_index_unique", unique = true) String email,
    @NotBlank String password,
    @NotBlank String image,
    @NotBlank String username,
    @NotBlank String userOccupation,
        Role role
) {
}
