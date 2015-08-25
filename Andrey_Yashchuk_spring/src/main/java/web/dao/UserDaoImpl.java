package web.dao;

import web.domain.User;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by admin on 13.01.2015.
 */
@Repository
@Transactional
public class UserDaoImpl implements UserDao{
   // @Autowired
    private SessionFactory sessionFactory;
    @Override
    public Long create(User user) {
        return (Long)sessionFactory.getCurrentSession().save(user);
    }

    @Override
    @Transactional (readOnly = true)
    public User read(Long id) {
        return (User)sessionFactory.getCurrentSession().get(User.class,id);
    }

    @Override
    public boolean update(User user) {
        sessionFactory.getCurrentSession().update("USERS", user);
        return true;
    }

    @Override
    public boolean delete(User user) {
        sessionFactory.getCurrentSession().delete(user);
        return true;
    }

    @Override
    @Transactional (readOnly = true)
    public List<User> findAll() {
            return sessionFactory.getCurrentSession().createCriteria(User.class).list();
    }
}
