package com.NoCountry.educ.ar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.educ.ar.dto.FormRequestDTO;
import com.NoCountry.educ.ar.dto.FormResponseDTO;
import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.dto.UserOfFormRequest;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.service.PreInscriptionImplements;
import com.NoCountry.educ.ar.service.UserServiceImplements;

@CrossOrigin
@RestController
@RequestMapping("/api/forms")
public class FormController {
    
    @Autowired
    private PreInscriptionImplements preInscriptionService;

    @Autowired
    private UserServiceImplements userService;

    @PostMapping("")
    public ResponseEntity<FormResponseDTO> createForm(@RequestBody FormRequestDTO formRequest) {
        PreInscriptionRequestDTO preInscriptionRequestDTO = new PreInscriptionRequestDTO(formRequest);
        PreInscription newPreInscription = preInscriptionService.createPreInscription(preInscriptionRequestDTO);
        
        UserOfFormRequest userRequestDTO = new UserOfFormRequest(formRequest);
        User newUser = userService.createUser(userRequestDTO, newPreInscription);
        
        FormResponseDTO formResponse = new FormResponseDTO(newPreInscription, newUser);
        return new ResponseEntity<>(formResponse, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<User>> getFormByUserId(@PathVariable String userId) {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<User>> getForms() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }
}