import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MeuFooterComponent } from './meu-footer/meu-footer.component';
import { MeuHeaderComponent } from './meu-header/meu-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    MeuFooterComponent,
    MeuHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    MeuFooterComponent,
    MeuHeaderComponent
  ],
})
export class SharedComponentsModule { }
