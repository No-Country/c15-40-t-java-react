package com.NoCountry.educ.ar.dto;

import java.util.List;

import com.NoCountry.educ.ar.entity.EducationLevel;
import com.NoCountry.educ.ar.entity.Institution.Approach;
import com.NoCountry.educ.ar.entity.Institution.Genere;
import com.NoCountry.educ.ar.entity.Institution.Religion;

public record InstitutionRequestDTO(
    String institutionName,
    String address,
    String city,
    List<String> phones,
    String cue,
    String web,
    String administration,
    List<EducationLevel> educationLevels,
    List<String> educationalWorkshops,
    boolean bilingual,
    boolean canteen,
    List<Religion> religion,
    boolean schoolUniform,
    Genere genere,
    Approach educationalApproach,
    List<String> images,
    String logo
) {
    
}
