import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFnsModule } from 'ngx-date-fns';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerTopComponent } from './components/banner-top/banner-top.component';
import { BannerBottomComponent } from './components/banner-bottom/banner-bottom.component';
import { FooterComponent } from './components/footer/footer.component';

const MODULES = [
  DateFnsModule
];

const COMPONENTS = [
  NavbarComponent,
  HeaderComponent,
  BannerTopComponent,
  BannerBottomComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
