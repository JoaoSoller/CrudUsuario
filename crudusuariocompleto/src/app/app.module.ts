import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostUsuarioComponent } from './components/post-usuario/post-usuario.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';
import { DepartamentoServiceComponent } from './service/departamento.service/departamento.service.component';

@NgModule({
  declarations: [
    AppComponent,
    PostUsuarioComponent,
    GetAllComponent,
    UpdateUsuarioComponent,
    DepartamentoServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
