package com.NoCountry.educ.ar.dto;

import java.util.List;

public record PreInscriptionRequestDTO(

    String institutionName,
    String address,
    String city,
    List<String> phones, 
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
