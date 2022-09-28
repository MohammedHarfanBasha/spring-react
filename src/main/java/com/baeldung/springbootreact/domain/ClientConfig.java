package com.baeldung.springbootreact.domain;

import com.gcit.springbootreact.domain.Client;

import javax.persistence.*;

@Entity
@Table(name = "clientConfig")
public class ClientConfig {

    @Id
    @GeneratedValue
    private Long cid;

    private String keyParameters;

    private String valueParameters;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "lmi_id" , nullable = false)
    private Client client;

    public ClientConfig(){}

    public ClientConfig(Long cid, String keyParameters,String valueParameters){
        this.cid = cid;
        this.keyParameters = keyParameters;
        this.valueParameters = valueParameters;
    }

    public Long getId(){
        return cid;
    }

    public void setId(Long cid){
        this.cid = cid;
    }

    public String getKeyParameters(){
        return keyParameters;
    }

    public void setKeyParameters(String keyParameters){
        this.keyParameters = keyParameters;
    }

    public String getValueParameters(){
        return valueParameters;
    }

    public void setValueParameters(String valueParameters){
        this.valueParameters = valueParameters;
    }

    public Client getClient(){
        return client;
    }

    public void setClient(){
        this.client = client;
    }
}