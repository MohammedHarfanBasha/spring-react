package com.gcit.springbootreact.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "client_config")
public class ClientConfig {

    @Id
    @GeneratedValue
    private Long id;

    private String keyParams;

    private String value;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "lmiId" ,referencedColumnName = "id",nullable = false)
//    private Client client;

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

//    public Client getClient(){
//        return client;
//    }
//
//    public void setClient(Client client){
//        this.client = client;
//    }
}
