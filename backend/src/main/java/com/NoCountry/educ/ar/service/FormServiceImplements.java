package com.NoCountry.educ.ar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.educ.ar.dto.FormRequestDTO;
import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.dto.UserRequestDTO;
import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.exception.DuplicateFieldException;
import com.NoCountry.educ.ar.validator.ObjectsValidator;

@Service
public class FormServiceImplements implements FormService {

    private InstitutionService institutionService;

    private UserService userService;

    @Autowired
    private ObjectsValidator<FormRequestDTO> formValidator;

    @Autowired
    public void setInstitutionService(InstitutionService institutionService) {
        this.institutionService = institutionService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public FormResponseDTO createForm(FormRequestDTO formRequest) {
        formValidator.validate(formRequest);

        if (institutionService.getInstitutionByCUE(formRequest.cue())  != null) 
            throw new DuplicateFieldException("CUE: " + formRequest.cue() + " ya se encuentra cargado");

        if (userService.findUserByEmail(formRequest.email()) != null)
            throw new DuplicateFieldException("Email: " + formRequest.email() + " ya se encuentra cargado");

        PreInscriptionRequestDTO preInscriptionRequestDTO = new PreInscriptionRequestDTO(formRequest);
        Institution newInstitution = institutionService.createInstitution(preInscriptionRequestDTO);
        
        if (newInstitution != null) {
            UserRequestDTO userRequestDTO = new UserRequestDTO(formRequest);
            User newUser = userService.createUser(userRequestDTO, newInstitution);
            if (newUser != null) {
                FormResponseDTO formResponse = new FormResponseDTO(newInstitution, newUser);
                return formResponse;
            }
        }
        return null;
    }

    @Override
    public FormResponseDTO getFormByUserId(String userId) {
        return userService.getFormByUserId(userId);
    }

    @Override
    public List<FormResponseDTO> getForms() {
        return userService.getUsersWithPreInscriptions();
    }
}