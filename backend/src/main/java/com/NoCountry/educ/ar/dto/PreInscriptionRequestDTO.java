package com.NoCountry.educ.ar.dto;

public record PreInscriptionRequestDTO(
    String institutionName,
    String address,
    String city,
    String[] phones, 
    String cue
) {
    public PreInscriptionRequestDTO(FormRequestDTO formRequest) {
        this(
            formRequest.institutionName(),
            formRequest.address(),
            formRequest.city(),
            formRequest.phones(),
            formRequest.cue()
        );
    }
}
