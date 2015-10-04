package web.service;

import org.apache.log4j.Logger;
import web.dao.UserDao;
import web.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by admin on 13.01.2015.
 */
@Service("userServiceImpl")
public class UserServiceImpl implements UserService {
    private static Logger log = Logger.getLogger(UserServiceImpl.class);
    @Autowired
    private UserDao userDao;

    public UserServiceImpl() {

    }

    @Override
    public Long create(User user) {
        log.info("create user: " + user);
        return userDao.create(user);
    }

    @Override
    public User read(Long id) {
        log.info("read user (id): " + id);
        return userDao.read(id);
    }

    @Override
    public boolean update(User user) {
        log.info("update user: " + user);
        return userDao.update(user);
    }

    @Override
    public boolean delete(User user) {
        log.info("delete user: " + user);
        return userDao.delete(user);
    }

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    public UserDao getUserDao() {
        return userDao;
    }
}
