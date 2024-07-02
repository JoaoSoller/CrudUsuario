import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostUsuarioComponent } from './components/post-usuario/post-usuario.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';

const routes: Routes = [
  { path: 'post-usuario', component: PostUsuarioComponent },
  { path: 'get-all', component: GetAllComponent },
  { path: 'update-usuario', component: UpdateUsuarioComponent },
  { path: "usuario/:id", component:UpdateUsuarioComponent},
  { path: '', redirectTo: '/get-all', pathMatch: 'full' },
  { path: '**', redirectTo: '/get-all' },  // Maneja rotas desconhecidas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
