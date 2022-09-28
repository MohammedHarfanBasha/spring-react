package com.gcit.springbootreact.domain;

import com.baeldung.springbootreact.domain.ClientConfig;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;

    @OneToMany(mappedBy = "client" , fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<ClientConfig> clientConfig;

    public Client() {
    }

    public Client(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Client(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<ClientConfig> getClientConfig(){
        return  clientConfig;
    }

    public void setClientConfig(){
        this.clientConfig = clientConfig;
    }
}
