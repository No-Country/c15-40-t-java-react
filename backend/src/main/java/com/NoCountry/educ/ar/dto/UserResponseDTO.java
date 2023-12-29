package com.NoCountry.educ.ar.dto;

import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.util.Role;

public record UserResponseDTO(
        String id,
        Institution pre_inscription_id,
        String email,
        String password,
        String username,
        Role role
) {
        public UserResponseDTO(User user){
                this(user.getId(), user.getInstitutionId(), user.getEmail(), user.getPassword(), user.getUsername(), user.getRole());
        }
}
