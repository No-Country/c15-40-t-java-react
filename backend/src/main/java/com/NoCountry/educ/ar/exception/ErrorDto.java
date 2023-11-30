package com.NoCountry.educ.ar.exception;

public record ErrorDto(
        String objectName,
        String fieldName,
        String rejectedValue,
        String errorMessage
) {}