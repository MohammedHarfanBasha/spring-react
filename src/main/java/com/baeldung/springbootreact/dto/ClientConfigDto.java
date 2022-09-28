package com.baeldung.springbootreact.dto;

public class ClientConfigDto {

        String keyParameters;
        String valueParameters;

        public ClientConfigDto(String keyParameters, String valueParameters){
            this.keyParameters = keyParameters;
            this.valueParameters = valueParameters;
        }

        public String getValueParameters(){
            return valueParameters;
        }
        public void setValueParameters(){
            this.valueParameters=valueParameters;
        }

        public String getKeyParameters(){
            return keyParameters;
        }

        public void setKeyParameters(){
            this.keyParameters = keyParameters;
        }
}
