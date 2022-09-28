package com.gcit.springbootreact.repository;

import com.gcit.springbootreact.domain.ClientConfig;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientConfigRepository extends JpaRepository<ClientConfig, Long> {
}
