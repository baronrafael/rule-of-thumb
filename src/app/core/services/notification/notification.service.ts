import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  activeLang!: string;

  constructor(
    private toastr: ToastrService
  ) {
  }

  message(message: string) {
    this.toastr.show(message);
  }

  messageWithTitle(message: string, title: string) {
    this.toastr.show(message, title);
  }

  successMessage(message: string) {
    this.toastr.success(message);
  }

  successMessageWithTitle(message: string, title: string) {
    this.toastr.success(message, title);
  }

  errorMessage(message: string) {
    this.toastr.error(message);
  }

  errorMessageWithTitle(message: string, title: string) {
    this.toastr.error(message, title);
  }

  warningMessage(message: string) {
    this.toastr.warning(message);
  }

  warningMessageWithTitle(message: string, title: string) {
    this.toastr.warning(message, title);
  }

  infoMessage(message: string) {
    this.toastr.info(message);
  }

  infoMessageWithTitle(message: string, title: string) {
    this.toastr.info(message, title);
  }

}
