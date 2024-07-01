package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Usuario;
import com.example.demo.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> findAll() {
        return usuarioRepository.findAllWithDepartamento();
    }

    public Optional<Usuario> findbyIdDepartamento(Long departamentoId) {
        return usuarioRepository.findbyIdDepartamento(departamentoId);
    }

    public Usuario save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }
    
    public List<Usuario> findByDepartamentoId(Long departamentoId) {
        return usuarioRepository.findByDepartamentoId(departamentoId);
    }
    
    
}
