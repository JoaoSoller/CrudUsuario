package com.example.demo.service;

import com.example.demo.entity.Departamento;
import com.example.demo.repository.DepartamentoRepository;

import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class DepartamentoService {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    public List<Departamento> findAll() {
        return departamentoRepository.findAll();
    }

    public Optional<Departamento> findById(Long id) {
        return departamentoRepository.findById(id);
    }
    public Departamento save(Departamento departamento) {
        return departamentoRepository.save(departamento);
    }

    public Departamento update(Long id, Departamento departamentoDetails) {
        Optional<Departamento> departamentoOpt = departamentoRepository.findById(id);
        if (departamentoOpt.isPresent()) {
            Departamento departamento = departamentoOpt.get();
            departamento.setNome(departamentoDetails.getNome());
            return departamentoRepository.save(departamento);
        }
        return null;
    }

    public void deleteById(Long id) {
        departamentoRepository.deleteById(id);
    }
    
    @PostConstruct
    public void init() {
        List<Departamento> departamentos = Arrays.asList(
                new Departamento("Financeiro"),
                new Departamento("Recursos Humanos"),
                new Departamento("TI"),
                new Departamento("Marketing")
        );
        departamentoRepository.saveAll(departamentos);
    }
    

}
