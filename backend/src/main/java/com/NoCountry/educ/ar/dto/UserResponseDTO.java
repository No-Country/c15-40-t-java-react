package com.NoCountry.educ.ar.dto;

import com.NoCountry.educ.ar.entity.User;


public record UserResponseDTO(
        String id,
        String email,
        String password,
        String image,
        String nameOfUser,
        String userOccupation,
        boolean alta
) {
    public UserResponseDTO(User user){
        this(user.getId(), user.getEmail(), user.getPassword(), user.getImage(), user.getUsername(),
                user.getUserOccupation(), user.isAlta());

}
}
