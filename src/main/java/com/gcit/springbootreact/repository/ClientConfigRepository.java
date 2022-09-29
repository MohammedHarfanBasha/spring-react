package com.gcit.springbootreact.repository;

import com.gcit.springbootreact.model.ClientConfig;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientConfigRepository extends JpaRepository<ClientConfig, Long> {
}
