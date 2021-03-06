import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const MODULES = [
  CommonModule,
  HttpClientModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 6000,
      extendedTimeOut: 6000,
      progressBar: true,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
  ],
  exports: [
    ...MODULES
  ],
})
export class CoreModule { }
