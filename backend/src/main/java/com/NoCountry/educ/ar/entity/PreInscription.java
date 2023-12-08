package com.NoCountry.educ.ar.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
//import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//@EqualsAndHashCode(of = "id")
@Document(value = "pre_inscriptions")
public class PreInscription {

    @Id
    private String id;
    
    private String institutionName;

    private String address;

    private String city;
    
    private List<String> phones;

    @Indexed(name = "institution_cue_index", unique = true)
    private String cue;

    public PreInscription(PreInscriptionRequestDTO preInscriptionRequest) {
        this.institutionName = preInscriptionRequest.institutionName();
        this.address = preInscriptionRequest.address();
        this.city =  preInscriptionRequest.city();
        this.phones = preInscriptionRequest.phones();
        this.cue = preInscriptionRequest.cue();
    }
}
