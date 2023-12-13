package com.NoCountry.educ.ar.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.NoCountry.educ.ar.entity.Institution;

public interface InstitutionRepository extends MongoRepository<Institution, String> {
    Optional<Institution> getPreInscriptionByCue(String cue);
}