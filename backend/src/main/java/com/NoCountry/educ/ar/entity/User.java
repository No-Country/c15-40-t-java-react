package com.NoCountry.educ.ar.entity;

import com.NoCountry.educ.ar.dto.UserOfFormRequest;
import com.NoCountry.educ.ar.dto.UserRequestDTO;
import com.NoCountry.educ.ar.util.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "users")
public class User implements UserDetails {

    @Id
    private String id;

    @DBRef
    private PreInscription preInscriptionId;

    @Indexed(name = "email_index", unique = true)
    private String email;

    private String password;
    
    @Enumerated(EnumType.STRING)
    private Role role;

    public User(UserRequestDTO userRequestDTO) {
        this.email = userRequestDTO.email();
        this.password = userRequestDTO.password();
        this.role = userRequestDTO.role();
    }

    public User(UserOfFormRequest userOfFormRequest) {
        this.email = userOfFormRequest.email();
        this.password = userOfFormRequest.password();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        if (role != null) {
            authorities.addAll(role.getPermissions().stream()
                    .map(permissionEnum -> new SimpleGrantedAuthority(permissionEnum.name()))
                    .collect(Collectors.toList()));

            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.name()));
        } else {
            // Si role es nulo, agrega un rol predeterminado o maneja de acuerdo a tus necesidades
            authorities.add(new SimpleGrantedAuthority("ROLE_DEFAULT"));
        }

        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getUsername() {
        return email;
    }
}
