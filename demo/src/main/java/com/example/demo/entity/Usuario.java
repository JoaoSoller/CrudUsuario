package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senha;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "departamento", referencedColumnName = "id")
    private Departamento departamento;

    public Usuario() {}

    public Usuario(String nome, String email, String senha, Departamento departamento) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.departamento = departamento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

   
	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}
	
	 @Override
	    public String toString() {
	        return "Usuario{" +
	                "id=" + id +
	                ", nome='" + nome + '\'' +
	                ", email='" + email + '\'' +
	                ", senha='" + senha + '\'' +
	                '}';
	    }

}

