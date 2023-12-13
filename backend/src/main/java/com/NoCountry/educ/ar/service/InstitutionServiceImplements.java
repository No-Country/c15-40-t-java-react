package com.NoCountry.educ.ar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.entity.EducationLevel;
import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.exception.IdNotFoundException;
import com.NoCountry.educ.ar.repository.InstitutionRepository;
import com.NoCountry.educ.ar.validator.ObjectsValidator;

@Service
public class InstitutionServiceImplements implements InstitutionService {

    @Autowired
    private InstitutionRepository institutionRepository;

    @Autowired
    private ObjectsValidator<PreInscriptionRequestDTO> preInscriptionValidator;

    @Override
    public Institution createInstitution(PreInscriptionRequestDTO institutionDTO) {
        Institution newInstitution = new Institution(institutionDTO);
        return institutionRepository.save(newInstitution);
    }

    @Override
    public Institution createInstitutionWithAllFields(Institution institution) {
        /*List<EducationLevel> educationLevels = institution.getEdutationLevels();

        for (EducationLevel elem: educationLevels) {

        }*/
        return institutionRepository.save(institution);
    }   

    @Override
    public Institution getInstitutionById(String id) {
        return institutionRepository.findById(id)
            .orElseThrow(() -> new IdNotFoundException("Pre inscripcion con id = " + id + " no encontrada"));
    }

    @Override
    public List<Institution> getInstitutions() {
        return institutionRepository.findAll();
    }

    @Override
    public Institution getInstitutionByCUE(String cue) {
        return institutionRepository.getPreInscriptionByCue(cue).orElse(null);
    }
}