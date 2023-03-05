import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-success',
  templateUrl: './password-success.component.html',
  styleUrls: ['./password-success.component.css'],
})
export class PasswordSuccessComponent implements OnInit {
  ngOnInit(): void {
    setInterval(this.countdown, 1000);
  }
  timer: number = 5;
  successMessage: string = `Your password has been successfully updated. You will be automatically redirected to login screen in
  ${this.timer} seconds. If you are not redirected`;
  linkToRedirect: string = ' click here';

  countdown = (): void => {
    if (this.timer < 0) {
      this.redirect();
      return;
    }
    this.successMessage = `Your password has been successfully updated. You will be automatically redirected to login screen in
      ${this.timer} seconds. If you are not redirected`;
    this.timer = this.timer - 1;
  };

  redirect = () => (window.location.href = 'https://www.google.com/');
}
