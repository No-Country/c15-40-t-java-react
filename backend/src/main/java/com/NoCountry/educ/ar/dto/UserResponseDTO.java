package com.NoCountry.educ.ar.dto;

import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;


public record UserResponseDTO(
        String id,
        PreInscription pre_inscription_id,
        String email,
        String password,
        boolean alta
) {
        public UserResponseDTO(User user){
                this(user.getId(), user.getPreInscriptionId(), user.getEmail(), user.getPassword(), user.isAlta());
        }
}
