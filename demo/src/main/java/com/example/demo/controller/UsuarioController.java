package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Usuario;
import com.example.demo.service.UsuarioService;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin("*")
@RequiredArgsConstructor
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return usuarioService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.findbyIdDepartamento(id);
        return usuario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        if (usuario.getDepartamento() == null || usuario.getDepartamento().getId() == null) {
            throw new IllegalArgumentException("Departamento inválido ou não especificado");
        }
        return usuarioService.save(usuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetails) {
        Optional<Usuario> optionalUsuario = usuarioService.findbyIdDepartamento(id);
        
        if (optionalUsuario.isPresent()) {
            Usuario existingUsuario = optionalUsuario.get();
            

            existingUsuario.setNome(usuarioDetails.getNome());
            existingUsuario.setEmail(usuarioDetails.getEmail());
            existingUsuario.setSenha(usuarioDetails.getSenha());


            if (usuarioDetails.getDepartamento() != null && usuarioDetails.getDepartamento().getId() != null) {
                existingUsuario.setDepartamento(usuarioDetails.getDepartamento());
            } else {
                return ResponseEntity.badRequest().build();
            }

            usuarioService.save(existingUsuario);
            return ResponseEntity.ok(existingUsuario);
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.findbyIdDepartamento(id);
        if (usuario.isPresent()) {
            usuarioService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/departamento/{departamentoId}")
    public ResponseEntity<List<Usuario>> getUsuariosByDepartamento(@PathVariable Long departamentoId) {
        List<Usuario> usuarios = usuarioService.findByDepartamentoId(departamentoId);
        return ResponseEntity.ok(usuarios);
    }
}