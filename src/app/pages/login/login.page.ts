import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { MenuController, Events, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  copyright: string = 'Copyright © ' + (new Date()).getFullYear() + ', Circle Corporation. All Rights Reserved';
  
  constructor(
    public formBuilder: FormBuilder, 
    private event: Events,
    private router: Router,
    public toastController: ToastController,
    private menuCtrl: MenuController,
    private loginService : LoginService
    ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
      '',
      Validators.compose([
      Validators.required,
      ])
      ),
    password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  login(){
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.settings(data);
      this.router.navigate(['tabs/tab1']);
    }
  }
  settings(result) {
   const  token = this.loginService.setToken(result);
   console.log('result',token);
  }
  
}
