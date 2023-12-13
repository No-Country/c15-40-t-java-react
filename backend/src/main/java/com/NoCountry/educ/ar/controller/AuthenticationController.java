package com.NoCountry.educ.ar.controller;

import com.NoCountry.educ.ar.dto.AuthenticationRequest;
import com.NoCountry.educ.ar.dto.AuthenticationResponse;
import com.NoCountry.educ.ar.service.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PreAuthorize("permitAll")
    @PostMapping("/authenticate")
    public ResponseEntity<?> login(@RequestBody @Valid AuthenticationRequest authRequest) {
        try {
            AuthenticationResponse jwtDto = authenticationService.login(authRequest);
            return ResponseEntity.ok(jwtDto);
        } catch (BadCredentialsException e) {
            // Manejar la excepción de credenciales incorrectas
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas: Verifique su correo electrónico y contraseña");
        } catch (UsernameNotFoundException e) {
            // Manejar la excepción de usuario no encontrado
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no encontrado: Verifique su correo electrónico");
        }
    }


    @PreAuthorize("permitAll")
    @GetMapping("/public-access")
    public String publicAccessEndpoint(){
        return "este endpoint es público";
    }

}
