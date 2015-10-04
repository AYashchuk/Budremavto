package web.domain;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by admin on 11.12.2014.
 */
@Entity
@Table(name = "USERS")
public class User {

    private static SimpleDateFormat format = new SimpleDateFormat("dd.MM.yy");

    @Id
    @SequenceGenerator(name = "sequence", sequenceName = "USERS_SEQ", allocationSize = 1, initialValue = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence")

    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME")
    private String name;

    @Column(name = "USERPASWORD")
    private String password;

    @Column(name="LOGINDATE")
    private String date;
    private String username;


    public User(){
        this.date = format.format(new Date());
    }

    public User(String name, String password) {
        this.name = name;
        this.password = password;
        this.date = format.format(new Date());
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString(){
        return "Users: id = " + this.id + ", UserName: "+ this.name + ", password: "+ this.password + ", date: " + this.date;
    }
}
