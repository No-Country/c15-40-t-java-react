package com.NoCountry.educ.ar.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
//@EqualsAndHashCode(of = "id")
@Document(value = "pre_inscriptions")
public class PreInscription {
    @Id
    private String id;
    private String institutionName;
    private String address;
    private String city;
    private String[] phones;
    private String cue;

    public PreInscription(PreInscriptionRequestDTO preInscriptionRequest) {
        this.institutionName = preInscriptionRequest.institutionName();
        this.address = preInscriptionRequest.address();
        this.city =  preInscriptionRequest.city();
        this.phones = preInscriptionRequest.phones();
        this.cue = preInscriptionRequest.cue();
    }
}
