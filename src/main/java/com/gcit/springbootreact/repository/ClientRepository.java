package com.gcit.springbootreact.repository;

import com.gcit.springbootreact.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
