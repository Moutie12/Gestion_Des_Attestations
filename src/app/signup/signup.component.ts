import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private service:ServiceService){}
  user = {
    name : '',
    email : '',
    password : ''
  }

  ajout() {
    this.service.AjoutUser(this.user).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

  

}
