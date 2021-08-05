import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginService.logar(this.usuario, this.senha)) {
      this.router.navigate(['/home']);
    } else {
      window.alert('Usuário/Senha inválidos.');
    }
  }

}
