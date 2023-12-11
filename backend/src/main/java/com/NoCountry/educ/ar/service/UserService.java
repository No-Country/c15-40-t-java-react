package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.UserOfFormRequest;

import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;
import java.util.List;

public interface UserService {

    public List<User> findAll();

    public User findById(String id);

    public User findUserByEmail(String email);

    public List<String> findByEmails();

    public User createUser(UserOfFormRequest userRequestDTO, PreInscription preInscription);

    public FormResponseDTO getFormByPreInscriptionId(String preInscriptionId);

    public FormResponseDTO getFormByUserId(String userId);

    public List<FormResponseDTO> getUsersWithPreInscriptions();
}