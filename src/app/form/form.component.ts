import { Component, EventEmitter, Input, Output } from '@angular/core';
import { commonPasswords } from 'src/models/commonlyUsedPassword';
import { ValidationColors } from 'src/models/validationColors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() showForm: boolean = true;
  @Output() showFormChange = new EventEmitter<boolean>();

  showPassword: boolean = false;
  showPasswordButton: string = 'Show Password';
  password: string = '';
  twelveCharValidColor: string = ValidationColors.BLACK;
  upperLowerCaseValidColor: string = ValidationColors.BLACK;
  lettersAndNumsValidColor: string = ValidationColors.BLACK;
  oneSpecialCharValidColor: string = ValidationColors.BLACK;
  notCommonlyUsedPasswordValidColor: string = ValidationColors.BLACK;
  regexUpperCase: RegExp = /[A-Z]/;
  regexLowerCase: RegExp = /[a-z]/;
  regexNumbersCase: RegExp = /[0-9]/;
  regexSpecialChar: RegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  validationListOverview: string =
    'Please adhere to required password criteria listed below';
  twelveCharValidationMessage: string = '12 characters long';
  upperLowerCaseValidationMessage: string =
    'a mixture of both uppercase and lowercase letters';
  lettersAndNumsValidationMessage: string = 'a mixture of letters and numbers';
  oneSpecialCharValidationMessag: string =
    'At least one special character, e.g., !@#?]';
  notCommonlyUsedPasswordValidationMessage: string =
    'Not a commonly used password (123456789, qwerty, etc)';

  passwordChange = (password: string) => {
    if (password === '') {
      this.twelveCharValidColor = ValidationColors.BLACK;
      this.upperLowerCaseValidColor = ValidationColors.BLACK;
      this.lettersAndNumsValidColor = ValidationColors.BLACK;
      this.oneSpecialCharValidColor = ValidationColors.BLACK;
      this.notCommonlyUsedPasswordValidColor = ValidationColors.BLACK;
    } else {
      this.twelveCharValid(password);
      this.upperLowerCaseValid(password);
      this.lettersAndNumsValid(password);
      this.oneSpecialCharValid(password);
      this.notCommonlyUsedPasswordValid(password);
    }
  };

  twelveCharValid = (password: string): void => {
    if (password.split('').length > 11) {
      this.twelveCharValidColor = ValidationColors.GREEN;
    } else {
      this.twelveCharValidColor = ValidationColors.RED;
    }
  };

  upperLowerCaseValid = (password: string): void => {
    if (
      password.match(this.regexUpperCase) &&
      password.match(this.regexLowerCase)
    ) {
      this.upperLowerCaseValidColor = ValidationColors.GREEN;
    } else {
      this.upperLowerCaseValidColor = ValidationColors.RED;
    }
  };

  lettersAndNumsValid = (password: string): void => {
    if (
      (password.match(this.regexUpperCase) ||
        password.match(this.regexLowerCase)) &&
      password.match(this.regexNumbersCase)
    ) {
      this.lettersAndNumsValidColor = ValidationColors.GREEN;
    } else {
      this.lettersAndNumsValidColor = ValidationColors.RED;
    }
  };

  oneSpecialCharValid = (password: string): void => {
    if (password.match(this.regexSpecialChar)) {
      this.oneSpecialCharValidColor = ValidationColors.GREEN;
    } else {
      this.oneSpecialCharValidColor = ValidationColors.RED;
    }
  };

  notCommonlyUsedPasswordValid = (password: string): void => {
    if (commonPasswords.includes(password)) {
      this.notCommonlyUsedPasswordValidColor = ValidationColors.RED;
    } else {
      this.notCommonlyUsedPasswordValidColor = ValidationColors.GREEN;
    }
  };

  onShowPassword = () => {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.showPasswordButton = 'Hide Password';
    } else {
      this.showPasswordButton = 'Show Password';
    }
  };

  onSubmit = () => {
    if (
      this.twelveCharValidColor === ValidationColors.GREEN &&
      this.upperLowerCaseValidColor === ValidationColors.GREEN &&
      this.lettersAndNumsValidColor === ValidationColors.GREEN &&
      this.oneSpecialCharValidColor === ValidationColors.GREEN &&
      this.notCommonlyUsedPasswordValidColor === ValidationColors.GREEN
    ) {
      console.log('success');
      this.hideForm();
    } else {
      console.log('failed');
    }
  };

  hideForm = () => {
    this.showFormChange.emit(false);
  };
}
