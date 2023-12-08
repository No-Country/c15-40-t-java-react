package com.NoCountry.educ.ar.service;

import java.util.List;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;
import com.NoCountry.educ.ar.entity.PreInscription;

public interface PreInscriptionService {
    
    public PreInscription createPreInscription(PreInscriptionRequestDTO preInscriptionDTO);

    public PreInscription getPreInscriptionById(String id);

    public PreInscription getPreInscriptionByCUE(String cue);

    public List<PreInscription> getPreInscriptions();
}
