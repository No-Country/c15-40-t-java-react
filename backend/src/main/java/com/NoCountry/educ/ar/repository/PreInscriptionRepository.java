package com.NoCountry.educ.ar.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.NoCountry.educ.ar.entity.PreInscription;

public interface PreInscriptionRepository extends MongoRepository<PreInscription, String> {
    Optional<PreInscription> getPreInscriptionByCue(String cue);
}