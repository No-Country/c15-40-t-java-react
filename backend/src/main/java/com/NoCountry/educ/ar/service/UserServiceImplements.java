package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.UserRequestDTO;
import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.exception.IdNotFoundException;
import com.NoCountry.educ.ar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImplements implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public List<String> getUsersEmails(){
        List<User> users = findAll();
        List<String> usernames = users.stream()
                .map(User::getUsername)
                .collect(Collectors.toList());
        return usernames;
    }

    @Override
    @Transactional
    public User findUserById(String id) {
        return userRepository.findById(id).orElseThrow(()-> new IdNotFoundException("Usario con" + id + "no encontrado"));
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    @Override
    @Transactional
    public User createUser(UserRequestDTO userRequestDTO, Institution institution) {
        User newUser = new User(userRequestDTO);
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword())); 
        newUser.setInstitutionId(institution);
        return userRepository.save(newUser);
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
