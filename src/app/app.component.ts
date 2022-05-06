import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { httpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkoutForm=new FormGroup ({
    name : new FormControl(''),
    addreess : new FormControl(''),
    number : new FormControl(''),
   
  })
    
  constructor( 
     private formBuilder:FormBuilder,public data:httpService) 
  {}
  onSubmit(){
    this.data.addform(this.checkoutForm.value).subscribe((result)=>{
      console.log("result data",result)
      
      this.checkoutForm.reset();
    })
    }

}
