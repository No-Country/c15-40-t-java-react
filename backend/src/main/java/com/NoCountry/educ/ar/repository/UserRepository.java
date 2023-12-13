package com.NoCountry.educ.ar.repository;

import com.NoCountry.educ.ar.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
   Optional<User> findByUsername(String username);
   Optional<User> findByEmail(String email);
   Optional<User> findByInstitutionId(String institutionId);
}
