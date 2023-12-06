package com.NoCountry.educ.ar.service;

import com.NoCountry.educ.ar.entity.User;
import java.util.List;


public interface UserService {
    public List<User> findAll();

    public User findById(String id);

    public User saveUser(User user);

}
