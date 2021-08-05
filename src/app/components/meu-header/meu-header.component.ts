import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-meu-header',
  templateUrl: './meu-header.component.html',
  styleUrls: ['./meu-header.component.css']
})
export class MeuHeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  get usuarioLogado(): string {
    return this.loginService.usuario!;
  }

}
