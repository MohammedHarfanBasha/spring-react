package com.gcit.springbootreact.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity(name = "client_config")
public class ClientConfig {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "key")
    private String key;

    @Column(name = "value")
    private String value;

    @ManyToOne
    @JoinColumn(name = "fk_client_id", referencedColumnName = "id")
//    @JsonIgnore
    private Client client;

    public ClientConfig(){}

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getvalue(){
        return value;
    }

    public void setvalue(String value){
        this.value = value;
    }

    public Client getClient(){
        return client;
    }

    public void setClient(Client client){
        this.client = client;
    }
}
