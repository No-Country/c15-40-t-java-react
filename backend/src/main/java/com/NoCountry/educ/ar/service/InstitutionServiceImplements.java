package com.NoCountry.educ.ar.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.NoCountry.educ.ar.dto.InstitutionRequestDTO;
import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.exception.IdNotFoundException;
import com.NoCountry.educ.ar.repository.InstitutionRepository;
import com.NoCountry.educ.ar.validator.ObjectsValidator;

@Service
public class InstitutionServiceImplements implements InstitutionService {

    @Autowired
    private InstitutionRepository institutionRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ObjectsValidator<PreInscriptionRequestDTO> preInscriptionValidator;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Institution createInstitution(PreInscriptionRequestDTO institutionDTO) {
        Institution newInstitution = new Institution(institutionDTO);
        return institutionRepository.save(newInstitution);
    }

    @Override
    public Institution createInstitutionWithAllFields(Institution institution) {
        //add validation?
        return institutionRepository.save(institution);
    }   

    @Override
    public Institution getInstitutionById(String id) {
        return institutionRepository.findById(id)
            .orElseThrow(() -> new IdNotFoundException("Institucion con id = " + id + " no encontrada"));
    }

    @Override
    public List<Institution> getInstitutions() {
        return institutionRepository.findAll();
    }

    @Override
    public Institution getInstitutionByCUE(String cue) {
        return institutionRepository.getPreInscriptionByCue(cue)
            .orElseThrow(() -> new IdNotFoundException("Institucion con CUE = " + cue + " no encontrada"));
    }

    @Override
    public Institution updateInstitution(String institutionEmail, InstitutionRequestDTO institution) {
        Institution institutionToUpdate = userService.getInstitutionByEmail(institutionEmail);
        
        institutionToUpdate.setInstitutionName(institution.institutionName());
        institutionToUpdate.setAddress(institution.address());
        institutionToUpdate.setCity(institution.city());
        institutionToUpdate.setPhones(institution.phones());
        institutionToUpdate.setWeb(institution.web());
        institutionToUpdate.setAdministration(institution.administration());
        institutionToUpdate.setEducationLevels(institution.educationLevels());
        institutionToUpdate.setEducationalWorkshops(institution.educationalWorkshops());
        institutionToUpdate.setBilingual(institution.bilingual());
        institutionToUpdate.setCanteen(institution.canteen());
        institutionToUpdate.setReligion(institution.religion());
        institutionToUpdate.setSchoolUniform(institution.schoolUniform());
        institutionToUpdate.setGenere(institution.genere());
        institutionToUpdate.setEducationalApproach(institution.educationalApproach());
        institutionToUpdate.setImages(institution.images());
        institutionToUpdate.setLogo(institution.logo());
        return createInstitutionWithAllFields(institutionToUpdate);
    }

    @Override
    public List<Institution> findByinstitutionName(String institutionName) {
        return institutionRepository.findByinstitutionName(institutionName);
    }

    @Override
    public List<Institution> findInstitutionsByFields(List<String> city, String range, String[] religion) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findInstitutionsByFields'");
    }

    @Override
    public List<String> getAllInstitutionCities() {
        return getInstitutions()
            .stream()
            .map(Institution::getCity)
            .collect(Collectors.toList());
    }
}