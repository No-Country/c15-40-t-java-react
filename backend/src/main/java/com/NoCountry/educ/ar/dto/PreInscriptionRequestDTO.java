package com.NoCountry.educ.ar.dto;

public record PreInscriptionRequestDTO(
    String institutionName,
    String address,
    String city,
    String[] phones, 
    String cue
) {
    
}
