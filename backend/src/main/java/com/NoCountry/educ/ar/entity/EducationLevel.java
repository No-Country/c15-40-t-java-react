package com.NoCountry.educ.ar.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EducationLevel {

    private Level level;
    private Range fee; 
    private LocalDate inscriptionDate;
    private Shift[] shifts = new Shift[2];
    private List<String> orientations = new ArrayList<>(); 
    
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public static class Shift {
        private Type type;
        private Range schedule;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public static class Range {
        private int min;
        private int max;
    }

    public enum Level {
        INICIAL, PRIMARIO, SECUNDARIO
    }

    public enum Type {
        MAÑANA, TARDE
    }

}