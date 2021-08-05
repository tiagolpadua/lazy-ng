import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ListaProdutosComponent } from './screens/lista-produtos/lista-produtos.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'cadastro', loadChildren: () => import('./modules/cadastro-usuario/cadastro-usuario.module').then(m => m.CadastroUsuarioModule) },
  {
    path: 'home',
    component: ListaProdutosComponent,
    canActivate: [AuthGuardGuard]
  },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuardGuard] },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Pagina404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
