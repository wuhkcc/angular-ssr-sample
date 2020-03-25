import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  async submitForm() {
    if (this.validateForm.valid) {
      // tslint:disable-next-line:forin
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      const resp = await this.loginService.Login(this.validateForm.value);
      console.log('login success', resp);
      this.router.navigateByUrl('/messages');
    }
  }

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
