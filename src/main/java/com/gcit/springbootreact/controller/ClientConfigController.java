package com.gcit.springbootreact.controller;



import com.gcit.springbootreact.domain.ClientConfig;
import com.gcit.springbootreact.repository.ClientConfigRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/clients/config")
public class ClientConfigController {

    private final ClientConfigRepository clientConfigRepository;

    public ClientConfigController(ClientConfigRepository clientConfigRepository) {
        this.clientConfigRepository = clientConfigRepository;
    }

    @GetMapping
    public List<ClientConfig> getClientConfigs() {
        return clientConfigRepository.findAll();
    }

    @GetMapping("/{id}")
    public ClientConfig getById(@PathVariable Long id) {
        return clientConfigRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createClientConfig(@RequestBody ClientConfig clientConfig) throws URISyntaxException {
        ClientConfig savedClientConfig = clientConfigRepository.save(clientConfig);
        return ResponseEntity.created(new URI("/clientConfig/" + savedClientConfig.getId())).body(savedClientConfig.getkeyParams());
    }

    @PutMapping("/{id}")
    public ResponseEntity updateClientConfig(@PathVariable Long id, @RequestBody ClientConfig clientConfig) {
        ClientConfig currentClientConfig = clientConfigRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClientConfig.setkeyParams(clientConfig.getkeyParams());
        currentClientConfig.setvalue(clientConfig.getvalue());
        currentClientConfig = clientConfigRepository.save(clientConfig);

        return ResponseEntity.ok(currentClientConfig);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteClientConfig(@PathVariable Long id) {
        clientConfigRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}