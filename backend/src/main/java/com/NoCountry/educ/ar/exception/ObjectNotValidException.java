package com.NoCountry.educ.ar.exception;

import java.util.Set;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Setter
@Getter
public class ObjectNotValidException extends RuntimeException {

    private final Set<String> errorMessages;
}


