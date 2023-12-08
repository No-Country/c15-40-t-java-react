package com.NoCountry.educ.ar.service;

import java.util.List;

import com.NoCountry.educ.ar.dto.FormRequestDTO;
import com.NoCountry.educ.ar.dto.FormResponseDTO;

public interface FormService {
    
    public FormResponseDTO createForm(FormRequestDTO formRequest);

    public FormResponseDTO getFormByPreInscriptionId(String preInscriptionId);

    public FormResponseDTO getFormByUserId(String userId);

    public List<FormResponseDTO> getForms();
}
