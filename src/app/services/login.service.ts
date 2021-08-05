import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _usuario: string | null = null;

  constructor() { }

  get usuario(): string | null {
    return this._usuario;
  }

  isUsuarioLogado(): boolean {
    return !!this._usuario;
  }

  logar(usuario: string, senha: string): boolean {
    if (usuario === senha) {
      this._usuario = usuario;
      return true;
    }

    return false;
  }

  deslogar(): void {
    this._usuario = null;
  }
}
