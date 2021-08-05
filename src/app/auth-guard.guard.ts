import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    if (this.loginService.isUsuarioLogado()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
