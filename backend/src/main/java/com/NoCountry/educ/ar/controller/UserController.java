package com.NoCountry.educ.ar.controller;

import com.NoCountry.educ.ar.dto.UserResponseDTO;
import com.NoCountry.educ.ar.entity.Institution;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/usernames")
    public ResponseEntity<List<String>> getAllUsernames() {
        return new ResponseEntity<>(userService.getUsersEmails(), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> getAll() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable String id) {
        return new ResponseEntity<>(new UserResponseDTO(userService.findUserById(id)), HttpStatus.OK);
    }

    @GetMapping("/institution/{userEmail}")
    public ResponseEntity<Institution> getInstitutionByUserEmail(@PathVariable String userEmail) {
        return new ResponseEntity<>(userService.getInstitutionByEmail(userEmail), HttpStatus.OK);
    }
}