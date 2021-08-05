import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuFooterComponent } from './components/meu-footer/meu-footer.component';
import { MeuHeaderComponent } from './components/meu-header/meu-header.component';
import { LoginComponent } from './screens/login/login.component';
import { CadastroUsuarioComponent } from './screens/cadastro-usuario/cadastro-usuario.component';
import { ListaProdutosComponent } from './screens/lista-produtos/lista-produtos.component';
import { AdminComponent } from './screens/admin/admin.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MeuHeaderComponent,
    MeuFooterComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    ListaProdutosComponent,
    AdminComponent,
    Pagina404Component,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
