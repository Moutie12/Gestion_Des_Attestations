import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private service : ServiceService,private router : Router){}

  cond_wrong = true ;

  changer_wrong() {
    this.cond_wrong = true ;
  }


  admin = {
    email :'',
    password :''
  }
  show() {
    if(this.admin.email == this.service.email && this.admin.password == this.service.password)
    {
      this.router.navigate(['/choixmodel1']);
    }else{
      this.cond_wrong = false ;
    } 
  }


}
