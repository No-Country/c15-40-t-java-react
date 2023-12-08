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
import com.NoCountry.educ.ar.service.FormService;

@CrossOrigin
@RestController
@RequestMapping("/api/forms")
public class FormController {

    @Autowired
    private FormService formService;

    @PostMapping("")
    public ResponseEntity<FormResponseDTO> createForm(@RequestBody FormRequestDTO formRequest) {
        return new ResponseEntity<>(formService.createForm(formRequest), HttpStatus.CREATED);
    }

    @GetMapping("/pre-inscription/{preInscriptionId}")
    public ResponseEntity<FormResponseDTO> getFormByPreInscriptionId(@PathVariable String preInscriptionId) {
        return new ResponseEntity<>(formService.getFormByPreInscriptionId(preInscriptionId), HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<FormResponseDTO> getFormByUserId(@PathVariable String userId) {
        return new ResponseEntity<>(formService.getFormByUserId(userId), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<FormResponseDTO>> getForms() {
        return new ResponseEntity<>(formService.getForms(), HttpStatus.OK);
    }
}