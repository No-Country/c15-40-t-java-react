package com.NoCountry.educ.ar.dto;

import java.util.List;

import com.NoCountry.educ.ar.entity.PreInscription;

public record PreInscriptionResponseDTO(
    String id,
    String instutitionName,
    String address,
    String city,
    List<String> phones,
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