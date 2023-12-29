package com.NoCountry.educ.ar.dto;

import java.util.List;

import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.entity.User;

public record FormResponseDTO (
    String institution_id,
    String institutionName, 
    String address,
    String city,
    List<String> phones,
    String cue,
    String user_id,
    String email
) {
    public FormResponseDTO(Institution institution, User user) {
        this(
            institution.getId(),
            institution.getInstitutionName(),
            institution.getAddress(),
            institution.getCity(),
            institution.getPhones(),
            institution.getCue(),
            user.getId(),
            user.getEmail()
        );
    }

    public FormResponseDTO(User user) {
        this(
            user.getInstitutionId().getId(),
            user.getInstitutionId().getInstitutionName(),
            user.getInstitutionId().getAddress(),
            user.getInstitutionId().getCity(),
            user.getInstitutionId().getPhones(),
            user.getInstitutionId().getCue(),
            user.getId(),
            user.getEmail()
        );
    }
}