import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  LoginForm: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.LoginForm = this.formBuilder.group({
      emailId: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(25)])
    });
  }

  ngOnInit(): void {
    
  }

  onLogin():void{
    
  }
}
