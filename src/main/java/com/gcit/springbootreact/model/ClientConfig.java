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
    private Long cid;

    @Column(name = "key_params")
    private String keyParams;

    @Column(name = "value")
    private String value;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "fk_client_id",  nullable = false)
//    @JsonIgnore
    private Client client;

    public ClientConfig(){}

    public ClientConfig(Long cid, String keyParams,String value){
        this.cid = cid;
        this.keyParams = keyParams;
        this.value = value;
    }

    public Long getId(){
        return cid;
    }

    public void setId(Long cid){
        this.cid = cid;
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
