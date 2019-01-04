import { BackgroundModule } from './background/background.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    BackgroundModule
  ],
  declarations: [LayoutComponent],
  exports: [
    CommonModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    BackgroundModule
  ]
})
export class LayoutModule { }
