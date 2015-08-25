package web.dao;

import web.domain.User;

import java.util.List;

/**
 * Created by admin on 13.01.2015.
 */
public interface UserDao {
    public Long create(User user);
    public User read(Long id);
    public boolean update(User user);
    public boolean delete(User user);
    public List<User> findAll();
}
