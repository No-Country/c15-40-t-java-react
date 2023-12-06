package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.UserRequestDTO;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImplements implements UserService{

    @Autowired
    private UserRepository userRepository;

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
    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public User createUser(UserRequestDTO userRequestDTO, PreInscription preInscription) {
        User newUser = new User(userRequestDTO);
        newUser.setPreInscriptionId(preInscription);
        return userRepository.save(newUser);
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
