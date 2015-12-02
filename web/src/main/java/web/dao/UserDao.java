package web.dao;

import web.domain.User;

import java.util.List;

/**
 * @author Yashchuk A.F.
 */
public interface UserDao {
    public Long create(User user);
    public User read(Long id);
    public boolean update(User user);
    public boolean delete(User user);
    public List<User> findAll();
}
