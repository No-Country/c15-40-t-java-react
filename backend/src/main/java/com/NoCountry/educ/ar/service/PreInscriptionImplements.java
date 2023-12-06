package com.NoCountry.educ.ar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.entity.PreInscription;
import com.NoCountry.educ.ar.repository.PreInscriptionRepository;

@Service
public class PreInscriptionImplements implements PreInscriptionService {

    @Autowired
    private PreInscriptionRepository preInscriptionRepository;

    @Override
    public PreInscription createPreInscription(PreInscriptionRequestDTO preInscriptionDTO) {
        PreInscription newPreInscription = new PreInscription(preInscriptionDTO);
        return preInscriptionRepository.save(newPreInscription);
    }

    @Override
    public PreInscription getPreInscriptionById(String id) {
        return preInscriptionRepository.findById(id).orElse(null);
    }

    @Override
    public List<PreInscription> getPreInscriptions() {
        return preInscriptionRepository.findAll();
    }
    
}
