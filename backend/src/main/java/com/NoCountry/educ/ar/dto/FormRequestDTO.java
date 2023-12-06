package com.NoCountry.educ.ar.dto;

public record FormRequestDTO(
    String institutionName,
    String address,
    String city,
    String[] phones,
    String cue,
    String email,
    String password
) {
}