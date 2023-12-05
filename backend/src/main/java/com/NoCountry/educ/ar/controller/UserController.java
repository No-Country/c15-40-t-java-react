package com.NoCountry.educ.ar.controller;

import com.NoCountry.educ.ar.dto.UserRequestDTO;
import com.NoCountry.educ.ar.dto.UserResponseDTO;
import com.NoCountry.educ.ar.entity.User;
import org.springframework.security.access.prepost.PreAuthorize;
import com.NoCountry.educ.ar.service.UserService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private MessageSource messageSource;

    @PreAuthorize("hasAuthority('READ_ALL_INSTITUTIONS')")
    @GetMapping("/usernames")
    public ResponseEntity<List<String>> getAllUsernames() {
        List<User> users = userService.findAll();
        List<String> usernames = users.stream()
                .map(User::getUsername)
                .collect(Collectors.toList());
        return new ResponseEntity<>(usernames, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('SAVE_ONE_INSTITUTION')")
    @GetMapping("/list")
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
        return new ResponseEntity<>(new UserResponseDTO(user), HttpStatus.OK);
    }

    @PostMapping("/register-user")
    public ResponseEntity<?> createUser(@RequestBody @Valid UserRequestDTO userRequest, BindingResult bindingResult, Locale locale) {
        if (bindingResult.hasErrors()) {
            String errorMessage = bindingResult.getFieldErrors().stream()
                    .map(error -> {
                        String messageCode = "error.validation." + error.getCode();
                        return messageSource.getMessage(messageCode, new Object[]{error.getField(), error.getRejectedValue()}, locale);
                    })
                    .collect(Collectors.joining(", "));
            return ResponseEntity.badRequest().body(errorMessage);
        }

        User newUser = new User(userRequest);
        userService.saveUser(newUser);
        UserResponseDTO userResponseDTO = new UserResponseDTO(newUser);
        return new ResponseEntity<>(userResponseDTO, HttpStatus.CREATED);
    }


}
