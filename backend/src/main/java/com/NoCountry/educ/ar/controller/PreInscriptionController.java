package com.NoCountry.educ.ar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.dto.PreInscriptionResponseDTO;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.service.PreInscriptionImplements;

@RestController
@RequestMapping("/api/pre-inscriptions")
public class PreInscriptionController {
    
    @Autowired
    private PreInscriptionImplements preInscriptionService;

    @PostMapping()
    public ResponseEntity<PreInscriptionResponseDTO> createPreInscription(@RequestBody PreInscriptionRequestDTO preInscriptionRequest) {
        PreInscription newPreInscription = preInscriptionService.createPreInscription(preInscriptionRequest);
        PreInscriptionResponseDTO preInscriptionResponseDTO = new PreInscriptionResponseDTO(newPreInscription);
        return new ResponseEntity<>(preInscriptionResponseDTO, HttpStatus.CREATED);
    } 

    @GetMapping("/{preInscriptionId}")
    public ResponseEntity<PreInscriptionResponseDTO> getPreInscriptionById(@PathVariable String preInscriptionId) {
        PreInscription preInscription = preInscriptionService.getPreInscriptionById(preInscriptionId);
        PreInscriptionResponseDTO preInscriptionResponseDTO = new PreInscriptionResponseDTO(preInscription);
        return new ResponseEntity<>(preInscriptionResponseDTO, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<PreInscriptionResponseDTO>> getPreInscriptions() {
        List<PreInscriptionResponseDTO> preInscriptions = preInscriptionService
            .getPreInscriptions()
            .stream()
            .map(preInscription -> new PreInscriptionResponseDTO(preInscription))
            .toList();
        return new ResponseEntity<>(preInscriptions, HttpStatus.OK);
    }


}
