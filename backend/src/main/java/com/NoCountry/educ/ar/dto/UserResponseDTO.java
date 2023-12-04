package com.NoCountry.educ.ar.dto;

import com.NoCountry.educ.ar.entity.User;


public record UserResponseDTO(
        String id,
        String pre_inscription_id,
        String email,
        String password,
        String image,
        String nameOfUser,
        String userOccupation,
        boolean alta
) {
    public UserResponseDTO(User user){
        this(user.getId(), user.getPre_inscription_id(), user.getEmail(), user.getPassword(), user.getImage(), user.getUsername(),
                user.getUserOccupation(), user.isAlta());

}
}
