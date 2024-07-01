package com.example.demo.test;
import com.example.demo.entity.Departamento;
import com.example.demo.entity.Usuario;
import com.example.demo.service.DepartamentoService;
import com.example.demo.service.UsuarioService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@AutoConfigureMockMvc
public class teste {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UsuarioService usuarioService;

    @MockBean
    private DepartamentoService departamentoService;

    @Test
    public void testCreateUser() throws Exception {
        Departamento departamento = new Departamento();
        departamento.setId(1L);
        departamento.setNome("Departamento de TI");
        departamentoService.save(departamento);
        
        Usuario usuarioTeste = new Usuario("Joao", "joao@email.com", "123", departamento);

        when(usuarioService.save(any(Usuario.class))).thenReturn(usuarioTeste);

        String responseJson = mockMvc.perform(MockMvcRequestBuilders.post("/api/usuario")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(usuarioTeste)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn()
                .getResponse()
                .getContentAsString();
        
        Usuario responseUsuario = objectMapper.readValue(responseJson, Usuario.class);

        assertEquals("Joao", responseUsuario.getNome());
        assertEquals("joao@email.com", responseUsuario.getEmail());
        assertEquals("Departamento de TI", responseUsuario.getDepartamento().getNome());

        verify(usuarioService, times(1)).save(any(Usuario.class));
    }
}
