package com.NoCountry.educ.ar.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.NoCountry.educ.ar.entity.Institution;
import org.springframework.data.mongodb.repository.Query;

public interface InstitutionRepository extends MongoRepository<Institution, String> {
    Optional<Institution> getPreInscriptionByCue(String cue);

    @Query("{'institutionName': {$regex : ?0, $options: 'i'}}")
    List<Institution> findByinstitutionName(String institutionName);

    @Query(value = "{}", fields = "{'_id': 0, 'city': 1}")
    List<String> findAllInstitutionsNames();
}