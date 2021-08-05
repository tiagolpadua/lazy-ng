import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.usuario === this.senha) {
      window.alert('Usuário Cadastrado com sucesso!');
      this.router.navigate(['/login']);
    } else {
      window.alert('Usuário/Senha não correspondem.');
    }
  }

}
