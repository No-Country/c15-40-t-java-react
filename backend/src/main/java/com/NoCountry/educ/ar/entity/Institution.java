package com.NoCountry.educ.ar.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.NoCountry.educ.ar.dto.PreInscriptionRequestDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "institutions")
public class Institution {

    @Id
    private String id;
    
    private String institutionName;

    private String address;

    private String city;
    
    private List<String> phones;

    @Indexed(name = "institution_cue_index", unique = true)
    private String cue;

    private String web;

    private List<String> administration;

    private List<EducationLevel> educationLevels;

    private List<String> educationalWorkshops;

    private boolean bilingual;

    private boolean canteen;

    private List<Religion> religion;

    private boolean schoolUniform;

    private Genere genere;

    private Approach educationalApproach;

    private List<String> images;

    private String logo;


    public Institution(PreInscriptionRequestDTO preInscriptionRequest) {
        this.institutionName = preInscriptionRequest.institutionName();
        this.address = preInscriptionRequest.address();
        this.city =  preInscriptionRequest.city();
        this.phones = preInscriptionRequest.phones();
        this.cue = preInscriptionRequest.cue();
    }

    public enum Religion {
        CATOLICO, JUDIO, EVANGELISTA, LAICO, OTRO
    }

    public enum Genere {
        MASCULINO, FEMENINO, MIXTO
    }

    public enum Approach {
        TRADICIONAL, MONTESORI, ESPECIAL 
    }
}
