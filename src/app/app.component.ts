import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkoutForm=new FormGroup({
    name : new FormControl(''),
    addreess : new FormControl(''),
    number : new FormControl(''),
   
  })
    
  constructor( 
     private formBuilder:FormBuilder,) 
  {}
  onSubmit(){
console.log (this.checkoutForm.value);
    
    }

}
