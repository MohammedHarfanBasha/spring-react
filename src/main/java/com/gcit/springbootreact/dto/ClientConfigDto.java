package com.gcit.springbootreact.dto;

public class ClientConfigDto {
    String keyParams;
    String value;

    public ClientConfigDto(String keyParams, String value){
        this.keyParams = keyParams;
        this.value = value;
    }

    public String getvalue(){
        return value;
    }
    public void setvalue(){
        this.value=value;
    }

    public String getkeyParams(){
        return keyParams;
    }

    public void setkeyParams(){
        this.keyParams = keyParams;
    }
}
