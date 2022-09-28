package com.baeldung.springbootreact.repository;

import com.baeldung.springbootreact.domain.ClientConfig;
import com.baeldung.springbootreact.dto.ClientConfigDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.websocket.server.PathParam;
import java.util.List;


public interface ClientConfigRepository extends JpaRepository<ClientConfig , Long> {

    @Query("select NEW com.baeldung.springbootreact.dto.ClientConfigDto(e.keyParameters, e.valueParameters) from ClientConfig e where e.client.id = :lmiId ")
    public List<ClientConfigDto> findAllByClientId(@PathParam("lmiId") Long lmiId);
}
