package com.baeldung.springbootreact.controller;


import com.baeldung.springbootreact.domain.ClientConfig;
import com.baeldung.springbootreact.repository.ClientConfigRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/clientConfig")
public class ClientConfigController {

    private final ClientConfigRepository clientConfigRepository;

    public ClientConfigController(ClientConfigRepository clientConfigRepository) {
        this.clientConfigRepository = clientConfigRepository;
    }

    @GetMapping("/")
    public List<ClientConfig> getClientConfigs() {
        return clientConfigRepository.findAll();
    }

    @GetMapping("/{cid}")
    public ClientConfig getById(@PathVariable Long cid) {
        return clientConfigRepository.findById(cid).orElseThrow(RuntimeException::new);
    }

    @PostMapping("/")
    public ResponseEntity createClientConfig(@RequestBody ClientConfig clientConfig) throws URISyntaxException {
        ClientConfig savedClientConfig = clientConfigRepository.save(clientConfig);
        return ResponseEntity.created(new URI("/clientConfig/" + savedClientConfig.getId())).body(savedClientConfig.getKeyParameters());
    }

    @PutMapping("/{cid}")
    public ResponseEntity updateClientConfig(@PathVariable Long cid, @RequestBody ClientConfig clientConfig) {
        ClientConfig currentClientConfig = clientConfigRepository.findById(cid).orElseThrow(RuntimeException::new);
        currentClientConfig.setKeyParameters(clientConfig.getKeyParameters());
        currentClientConfig.setValueParameters(clientConfig.getValueParameters());
        currentClientConfig = clientConfigRepository.save(clientConfig);

        return ResponseEntity.ok(currentClientConfig);
    }

    @DeleteMapping("/{cid}")
    public ResponseEntity deleteClientConfig(@PathVariable Long cid) {
        clientConfigRepository.deleteById(cid);
        return ResponseEntity.ok().build();
    }

}
