import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { AdminComponent } from './screens/admin/admin.component';
import { CadastroUsuarioComponent } from './screens/cadastro-usuario/cadastro-usuario.component';
import { ListaProdutosComponent } from './screens/lista-produtos/lista-produtos.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  {
    path: 'home',
    component: ListaProdutosComponent,
    canActivate: [AuthGuardGuard]
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: Pagina404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
