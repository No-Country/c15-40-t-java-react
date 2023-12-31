package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.dto.AuthenticationRequest;
import com.NoCountry.educ.ar.dto.AuthenticationResponse;
import com.NoCountry.educ.ar.entity.User;
import com.NoCountry.educ.ar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthenticationService  implements UserDetailsService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    public AuthenticationResponse login(AuthenticationRequest authRequest) {
        try {
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    authRequest.email(), authRequest.password()
            );

            authenticationManager.authenticate(authToken);

            User user = userRepository.findByEmail(authRequest.email()).orElseThrow(() ->
                    new UsernameNotFoundException("Usuario no encontrado: " + authRequest.email()));

            String jwt = jwtService.generateToken(user, generateExtraClaims(user));

            return new AuthenticationResponse(jwt);
        } catch (BadCredentialsException e) {
            // Manejar la excepción de credenciales incorrectas
            throw new BadCredentialsException("Credenciales incorrectas: Verifique su correo electrónico y contraseña");
        }
    }


    private Map<String, Object> generateExtraClaims(User user) {

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("name", user.getEmail());
        extraClaims.put("role", user.getRole().name());
        extraClaims.put("permissions", user.getAuthorities());

        return extraClaims;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findByEmail(email);

        return userOptional.orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + email));
    }
}