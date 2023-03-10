import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private service:DataService){}
  registerForm = this.fb.group({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    city: new FormControl(''),
    age: new FormControl(''),
  })
  
  public addedItem: any = {};

  onSubmit(){
    this.service.register(this.registerForm.value).subscribe((data:any) =>{
      alert('User Registered');
    })
  }
}



