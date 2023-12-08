package com.NoCountry.educ.ar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.educ.ar.dto.FormRequestDTO;
import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.dto.UserOfFormRequest;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.validator.ObjectsValidator;

@Service
public class FormServiceImplements implements FormService {

    private PreInscriptionService preInscriptionService;

    private UserService userService;

    @Autowired
    private ObjectsValidator<FormRequestDTO> formValidator;

    @Autowired
    public void setPreInscriptionService(PreInscriptionService preInscriptionService) {
        this.preInscriptionService = preInscriptionService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public FormResponseDTO createForm(FormRequestDTO formRequest) {
        formValidator.validate(formRequest);

        PreInscriptionRequestDTO preInscriptionRequestDTO = new PreInscriptionRequestDTO(formRequest);
        PreInscription newPreInscription = preInscriptionService.createPreInscription(preInscriptionRequestDTO);
        
        if (newPreInscription != null) {
            UserOfFormRequest userRequestDTO = new UserOfFormRequest(formRequest);
            User newUser = userService.createUser(userRequestDTO, newPreInscription);
            if (newUser != null) {
                FormResponseDTO formResponse = new FormResponseDTO(newPreInscription, newUser);
                return formResponse;
            }
        }
        return null;
    }

    @Override
    public FormResponseDTO getFormByPreInscriptionId(String preInscriptionId) {
        return userService.getFormByPreInscriptionId(preInscriptionId);
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