package com.NoCountry.educ.ar.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class DuplicateFieldException extends RuntimeException {
    
    public DuplicateFieldException(String message) {
        super(message);
    }

    public DuplicateFieldException(String message, Throwable cause) {
        super(message, cause);
    }
}