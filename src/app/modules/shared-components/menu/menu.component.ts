import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logoff(): void {
    this.loginService.deslogar();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.loginService.usuario === 'admin';
  }

}
