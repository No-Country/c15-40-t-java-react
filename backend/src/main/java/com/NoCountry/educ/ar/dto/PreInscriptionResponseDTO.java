package com.NoCountry.educ.ar.dto;

import com.NoCountry.educ.ar.entity.PreInscription;

public record PreInscriptionResponseDTO(
    String id,
    String instutitionName,
    String address,
    String city,
    String[] phones,
    String cue
) {

    public PreInscriptionResponseDTO(PreInscription preInscription) {
        this(
            preInscription.getId(),
            preInscription.getInstitutionName(),
            preInscription.getAddress(),
            preInscription.getCity(),
            preInscription.getPhones(),
            preInscription.getCue()
        );
    }
}