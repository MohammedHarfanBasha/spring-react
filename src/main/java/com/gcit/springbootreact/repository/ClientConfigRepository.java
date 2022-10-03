package com.gcit.springbootreact.repository;

import com.gcit.springbootreact.dto.ClientConfigDto;
import com.gcit.springbootreact.model.ClientConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.websocket.server.PathParam;
import java.util.List;

@Repository
public interface ClientConfigRepository extends JpaRepository<ClientConfig, Long> {
    @Query("select NEW com.gcit.springbootreact.dto.ClientConfigDto(e.keyParams, e.value) from ClientConfig e where e.client.id = :fk_client_id")
    public List<ClientConfigDto> findAllByClientId(@PathParam("fk_client_id") Long fk_client_id);
}
