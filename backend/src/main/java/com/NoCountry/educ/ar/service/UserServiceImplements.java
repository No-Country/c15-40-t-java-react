package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.UserOfFormRequest;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.exception.DuplicateFieldException;
import com.NoCountry.educ.ar.exception.IdNotFoundException;
import com.NoCountry.educ.ar.repository.UserRepository;
import com.NoCountry.educ.ar.validator.ObjectsValidator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImplements implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectsValidator<UserOfFormRequest> userValidator;

    @Override
    @Transactional
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public User findById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    @Override
    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public User createUser(UserOfFormRequest userRequestDTO, PreInscription preInscription) {
        User newUser = new User(userRequestDTO);
        newUser.setPreInscriptionId(preInscription);
        return userRepository.save(newUser);
    }

    @Override
    public FormResponseDTO getFormByPreInscriptionId(String preInscriptionId) {
        User user = userRepository.findByPreInscriptionId(preInscriptionId)
            .orElseThrow(() -> new IdNotFoundException("Formulario con id de pre inscripcion = " + preInscriptionId + " no encontrado"));
        FormResponseDTO formSetup = new FormResponseDTO(user);
        return formSetup;
    }

    @Override
    public FormResponseDTO getFormByUserId(String userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new IdNotFoundException("Formulario con id de usuario = " + userId + " no encontrado"));
        FormResponseDTO formSetup = new FormResponseDTO(user);
        return formSetup;
    }

    @Override
    @Transactional
    public List<FormResponseDTO> getUsersWithPreInscriptions() {
        return userRepository.findAll()
            .stream()
            .map(user -> new FormResponseDTO(user))
            .toList();
    }
}
