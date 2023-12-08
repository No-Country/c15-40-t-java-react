package com.NoCountry.educ.ar.dto;

import java.util.List;

import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;

public record FormResponseDTO (
    String pre_inscription_id,
    String institutionName, 
    String address,
    String city,
    List<String> phones,
    String cue,
    String user_id,
    String email,
    String password
) {
    public FormResponseDTO(PreInscription preInscription, User user) {
        this(
            preInscription.getId(),
            preInscription.getInstitutionName(),
            preInscription.getAddress(),
            preInscription.getCity(),
            preInscription.getPhones(),
            preInscription.getCue(),
            user.getId(),
            user.getEmail(),
            user.getPassword()
        );
    }

    public FormResponseDTO(User user) {
        this(
            user.getPreInscriptionId().getId(),
            user.getPreInscriptionId().getInstitutionName(),
            user.getPreInscriptionId().getAddress(),
            user.getPreInscriptionId().getCity(),
            user.getPreInscriptionId().getPhones(),
            user.getPreInscriptionId().getCue(),
            user.getId(),
            user.getEmail(),
            user.getPassword()
        );
    }
}