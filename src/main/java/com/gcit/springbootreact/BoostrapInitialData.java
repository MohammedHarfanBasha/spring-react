package com.gcit.springbootreact;

import com.gcit.springbootreact.domain.Client;
import com.gcit.springbootreact.domain.ClientConfig;
import com.gcit.springbootreact.repository.ClientConfigRepository;
import com.gcit.springbootreact.repository.ClientRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class BoostrapInitialData implements CommandLineRunner {

    private final ClientRepository clientRepository;
    private final ClientConfigRepository clientConfigRepository;
    private final Faker faker = new Faker(Locale.getDefault());

    public BoostrapInitialData(ClientRepository clientRepository, ClientConfigRepository clientConfigRepository) {
        this.clientRepository = clientRepository;
        this.clientConfigRepository = clientConfigRepository;
    }

    @Override
    public void run(String... args) {
        for (int i = 0; i < 10; i++) {
            clientRepository.save(new Client(faker.name().fullName()));
        }
    }
}
