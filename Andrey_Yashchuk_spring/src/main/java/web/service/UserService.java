package web.service;


import web.domain.User;

import java.util.List;

/**
 * Created by admin on 13.01.2015.
 */
public interface UserService {

    public Long create(User user);
    public User read(Long id);
    public boolean update(User user);
    public boolean delete(User user);
    public List<User> findAll();



}
