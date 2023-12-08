package com.NoCountry.educ.ar.dto;

import java.util.List;

public record FormRequestDTO(
    String institutionName,
    String address,
    String city,
    List<String> phones,
    String cue,
    String email,
    String password
) {
}