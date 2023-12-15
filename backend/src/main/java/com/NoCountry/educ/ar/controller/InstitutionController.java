package com.NoCountry.educ.ar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.educ.ar.dto.InstitutionRequestDTO;
import com.NoCountry.educ.ar.dto.PreInscriptionResponseDTO;
import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.service.InstitutionService;

@CrossOrigin
@RestController
@RequestMapping("/api/institutions")
public class InstitutionController {

    @Autowired
    private InstitutionService institutionService;

    @PostMapping("")
    public ResponseEntity<Institution> createInstitution(@RequestBody Institution preInscriptionRequest) {
        return new ResponseEntity<>(institutionService.createInstitutionWithAllFields(preInscriptionRequest), HttpStatus.CREATED);
    }

    @GetMapping("/{institutionId}")
    public ResponseEntity<Institution> getInstitutionById(@PathVariable String institutionId) {
        return new ResponseEntity<>(institutionService.getInstitutionById(institutionId), HttpStatus.OK);
    }

    @GetMapping("cue/{institutionCue}")
    public ResponseEntity<Institution> getInstitutionByCue(@PathVariable String institutionCue) {
        return new ResponseEntity<>(institutionService.getInstitutionByCUE(institutionCue), HttpStatus.OK);
    }

    @GetMapping("/pre-inscription/{institutionId}")
    public ResponseEntity<PreInscriptionResponseDTO> getPreInscriptionByInsitutionId(@PathVariable String institutionId) {
        Institution preInscription = institutionService.getInstitutionById(institutionId);
        PreInscriptionResponseDTO preInscriptionResponseDTO = new PreInscriptionResponseDTO(preInscription);
        return new ResponseEntity<>(preInscriptionResponseDTO, HttpStatus.OK);  
    }

    @GetMapping("")
    public ResponseEntity<List<Institution>> getInstitutions() {
        List<Institution> institutions = institutionService.getInstitutions();
        return new ResponseEntity<>(institutions, HttpStatus.OK);
    }

    @PutMapping("/{institutionId}")
    public ResponseEntity<Institution> updateInstitution(@PathVariable String institutionId, @RequestBody InstitutionRequestDTO institutionData) {
        return new ResponseEntity<>(institutionService.updateInstitution(institutionId, institutionData), HttpStatus.OK);
    }
}