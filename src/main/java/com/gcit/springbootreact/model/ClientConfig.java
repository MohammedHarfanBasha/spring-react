package com.gcit.springbootreact.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "client_config")
public class ClientConfig {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "key_params")
    private String keyParams;

    @Column(name = "value")
    private String value;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_client_id", referencedColumnName = "id")
    @JsonIgnore
    private Client client;

    public ClientConfig(){}

    public ClientConfig(Long id, String keyParams,String value){
        this.id = id;
        this.keyParams = keyParams;
        this.value = value;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getkeyParams(){
        return keyParams;
    }

    public void setkeyParams(String keyParams){
        this.keyParams = keyParams;
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
