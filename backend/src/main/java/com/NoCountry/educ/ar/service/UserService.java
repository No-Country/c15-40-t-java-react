package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.UserRequestDTO;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;
import java.util.List;

public interface UserService {

    public List<User> findAll();

    public User findById(String id);

    public User saveUser(User user);

    public User createUser(UserRequestDTO userRequestDTO, PreInscription preInscription);

    public List<FormResponseDTO> getUsersWithPreInscriptions();
}