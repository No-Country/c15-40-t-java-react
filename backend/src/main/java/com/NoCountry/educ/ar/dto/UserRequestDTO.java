package com.NoCountry.educ.ar.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.mongodb.core.index.Indexed;

public record UserRequestDTO(
        @NotBlank @Email
        @Indexed(name = "pre_inscripcion_email_index_unique", unique = true) String email,
        @NotBlank @Size(min = 5, max = 20) String password
) {
        public UserRequestDTO(FormRequestDTO formRequest) {
                this(
                        formRequest.email(),
                        formRequest.password()
                );
        }  
}