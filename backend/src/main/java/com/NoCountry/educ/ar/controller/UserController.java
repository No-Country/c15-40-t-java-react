package com.NoCountry.educ.ar.controller;

import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.exception.ErrorDto;
import com.NoCountry.educ.ar.service.UserService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public ResponseEntity<List<User>> getAll() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable String id) {
        User user = null;
        Map<String, Object> response = new HashMap<>();
        try {
            user = userService.findById(id);
        } catch (DataAccessException e) {
            response.put("menseje", "error al realizar la consulta en la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        if (user == null) {
            response.put("mensaje", "El ID del usuario: ".concat(id.toString().concat(" no existe en la base de datos")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/register-user")
    public ResponseEntity<User> createUser(@RequestBody @Valid User userRequest) {
        User newUser = null;
        try {
            newUser = userService.saveUser(userRequest);
            return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
        } catch(Exception e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public List<ErrorDto> handleValidationExceptions(MethodArgumentNotValidException ex){
        return ex.getBindingResult()
                .getAllErrors()
                .stream()
                .map(UserController::getErrorDto)
                .toList();
    }

    private static ErrorDto getErrorDto(ObjectError error) {
        String field = error instanceof FieldError fieldError ? fieldError.getField() : null;
        String rejectedValue = error instanceof FieldError fieldError ? String.valueOf(fieldError.getRejectedValue()) : null;

        return new ErrorDto(
                error.getObjectName(),
                field,
                rejectedValue,
                error.getDefaultMessage());
    }
    
}
