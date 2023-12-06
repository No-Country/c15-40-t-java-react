package com.NoCountry.educ.ar.dto;

import org.springframework.data.mongodb.core.index.Indexed;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserOfFormRequest(@NotBlank @Email
        @Indexed(name = "pre_inscripcion_email_index_unique", unique = true) String email,
        @NotBlank String password
) {
    public UserOfFormRequest(FormRequestDTO formRequestDTO) {
        this(
            formRequestDTO.email(),
            formRequestDTO.password()
        );
    }

}
