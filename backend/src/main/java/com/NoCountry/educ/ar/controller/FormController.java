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
import com.NoCountry.educ.ar.service.PreInscriptionService;
import com.NoCountry.educ.ar.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/forms")
public class FormController {
    
    @Autowired
    private PreInscriptionService preInscriptionService;

    @Autowired
    private UserService userService;

    @PostMapping("")
    public ResponseEntity<?> createForm(@RequestBody FormRequestDTO formRequest) {
        PreInscriptionRequestDTO preInscriptionRequestDTO = new PreInscriptionRequestDTO(formRequest);
        PreInscription newPreInscription = preInscriptionService.createPreInscription(preInscriptionRequestDTO);
    
        if (newPreInscription != null) {
            UserOfFormRequest userRequestDTO = new UserOfFormRequest(formRequest);
            User newUser = userService.createUser(userRequestDTO, newPreInscription);
            if (newUser != null) {
                FormResponseDTO formResponse = new FormResponseDTO(newPreInscription, newUser);
                return new ResponseEntity<>(formResponse, HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);    
    }

    @GetMapping("/pre-inscription/{preInscriptionId}")
    public ResponseEntity<FormResponseDTO> getFormByPreInscriptionId(@PathVariable String preInscriptionId) {
        return new ResponseEntity<>(userService.getFormByPreInscriptionId(preInscriptionId), HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<FormResponseDTO> getFormByUserId(@PathVariable String userId) {
        return new ResponseEntity<>(userService.getFormByUserId(userId), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<FormResponseDTO>> getForms() {
        return new ResponseEntity<>(userService.getUsersWithPreInscriptions(), HttpStatus.OK);
    }
}