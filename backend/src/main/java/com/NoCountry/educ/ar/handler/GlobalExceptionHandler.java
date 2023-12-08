package com.NoCountry.educ.ar.handler;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.NoCountry.educ.ar.exception.IdNotFoundException;
import com.NoCountry.educ.ar.exception.ObjectNotValidException;
import com.mongodb.DuplicateKeyException;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ObjectNotValidException.class)
    public ResponseEntity<?> handleObjectNotValidException(ObjectNotValidException exception) {
        return ResponseEntity
            .badRequest()
            .body(getErrorsMap(exception.getErrorMessages().stream().collect(Collectors.toList()))); 
    }

    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<Map<String, List<String>>> handleNotFoundException(IdNotFoundException exception) {
        List<String> errors = Collections.singletonList(exception.getMessage());
        return new ResponseEntity<>(getErrorsMap(errors), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<Map<String, List<String>>> handleIndexedException(DuplicateKeyException exception) {
        return new ResponseEntity<>(getErrorsMap(List.of(exception.getMessage())), HttpStatus.BAD_REQUEST);
    }

    private Map<String, List<String>> getErrorsMap(List<String> errors) {
        Map<String, List<String>> errorResponse = new HashMap<>();
        errorResponse.put("errors", errors);
        return errorResponse;
    }
}
