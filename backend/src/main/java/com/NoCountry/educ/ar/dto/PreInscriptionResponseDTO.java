package com.NoCountry.educ.ar.dto;

import java.util.List;

import com.NoCountry.educ.ar.entity.Institution;

public record PreInscriptionResponseDTO(
    String id,
    String instutitionName,
    String address,
    String city,
    List<String> phones,
    String cue
) {

    public PreInscriptionResponseDTO(Institution institution) {
        this(
            institution.getId(),
            institution.getInstitutionName(),
            institution.getAddress(),
            institution.getCity(),
            institution.getPhones(),
            institution.getCue()
        );
    }
}