package com.gcit.springbootreact.model;

import javax.persistence.*;

@Entity
@Table(name = "login")
public class Login {

    @Id
    @SequenceGenerator(name = "hibernate_seq1" , sequenceName = "login_id_seq" , allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "hibernate_seq1")
    private long lid;

    private String userName;

    private String password;

    public Login(){

    }
    public Login(long lid, String userName, String password) {
        this.lid = lid;
        this.userName = userName;
        this.password = password;
    }

    public long getId() {
        return lid;
    }

    public void setId(long id) {
        this.lid = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
