package com.NoCountry.educ.ar.service;

import java.util.List;
import java.util.Set;

import com.NoCountry.educ.ar.dto.InstitutionRequestDTO;
import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.entity.Institution;

public interface InstitutionService {
    
    public Institution createInstitution(PreInscriptionRequestDTO preInscriptionRequestDTO);

    public Institution createInstitutionWithAllFields(Institution institution);

    public Institution getInstitutionById(String id);

    public Institution getInstitutionByCUE(String cue);

    public List<Institution> getInstitutions();

    public Institution updateInstitution(String institutionEmail, InstitutionRequestDTO institution);

    public List<Institution> findByinstitutionName(String institutionName);

    public Set<String> getAllInstitutionCities();

    public Institution updateActivated(String institutionEmail, InstitutionRequestDTO institution);  
}
