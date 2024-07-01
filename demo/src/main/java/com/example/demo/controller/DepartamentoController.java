package com.example.demo.controller;

import com.example.demo.entity.Departamento;
import com.example.demo.service.DepartamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departamento")
@CrossOrigin("*")
public class DepartamentoController {

    @Autowired
    private DepartamentoService departamentoService;

    @GetMapping
    public List<Departamento> getAllDepartamentos() {
        return departamentoService.findAll();
    }
    
    @PostMapping
    public Departamento createDepartamento(@RequestBody Departamento departamento) {
        return departamentoService.save(departamento);
    }

    @GetMapping("/{id}")
    public Departamento getDepartamentoById(@PathVariable Long id) {
        return departamentoService.findById(id).orElse(null);
    }
    @PutMapping("/{id}")
    public Departamento updateDepartamento(@PathVariable Long id, @RequestBody Departamento departamentoDetails) {
        return departamentoService.update(id, departamentoDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteDepartamento(@PathVariable Long id) {
        departamentoService.deleteById(id);
    }
}
