package com.NoCountry.educ.ar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.exception.IdNotFoundException;
import com.NoCountry.educ.ar.repository.PreInscriptionRepository;
import com.NoCountry.educ.ar.validator.ObjectsValidator;

@Service
public class PreInscriptionServiceImplements implements PreInscriptionService {

    @Autowired
    private PreInscriptionRepository preInscriptionRepository;

    @Autowired
    private ObjectsValidator<PreInscriptionRequestDTO> preInscriptionValidator;

    @Override
    public PreInscription createPreInscription(PreInscriptionRequestDTO preInscriptionDTO) {
        PreInscription newPreInscription = new PreInscription(preInscriptionDTO);
        return preInscriptionRepository.save(newPreInscription);
    }

    @Override
    public PreInscription getPreInscriptionById(String id) {
        return preInscriptionRepository.findById(id)
            .orElseThrow(() -> new IdNotFoundException("Pre inscripcion con id = " + id + " no encontrada"));
    }

    @Override
    public List<PreInscription> getPreInscriptions() {
        return preInscriptionRepository.findAll();
    }

    @Override
    public PreInscription getPreInscriptionByCUE(String cue) {
        return preInscriptionRepository.getPreInscriptionByCue(cue).orElse(null);
    }   
}