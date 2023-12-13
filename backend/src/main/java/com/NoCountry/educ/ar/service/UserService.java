package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.UserRequestDTO;
import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.entity.User;
import java.util.List;

public interface UserService {

    public List<User> findAll();

    public User findUserById(String id);

    public User findUserByEmail(String email);

    public List<String> getUsersEmails();

    public User createUser(UserRequestDTO userRequestDTO, Institution institution);

    public FormResponseDTO getFormByUserId(String userId);

    public List<FormResponseDTO> getUsersWithPreInscriptions();
}