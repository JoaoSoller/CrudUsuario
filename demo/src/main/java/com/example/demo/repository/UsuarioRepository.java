package com.example.demo.repository;

import java.util.List;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	@Query("SELECT u FROM Usuario u JOIN FETCH u.departamento")
	    List<Usuario> findAllWithDepartamento();
    @Query("SELECT u FROM Usuario u JOIN FETCH u.departamento d WHERE u.id = :departamentoId")
    	Optional<Usuario> findbyIdDepartamento(Long departamentoId);
    @Query("SELECT u FROM Usuario u JOIN FETCH u.departamento d WHERE u.departamento.id = :departamentoId")
    List<Usuario> findByDepartamentoId(@Param("departamentoId") Long departamentoId);


}
