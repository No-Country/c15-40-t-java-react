package com.NoCountry.educ.ar.repository;

import com.NoCountry.educ.ar.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

}
