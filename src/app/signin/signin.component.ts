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


  user = {
    email :'',
    password :''
  }
  show() {
    if(this.user.email == this.service.email && this.user.password == this.service.password)
    {
      this.router.navigate(['/choixmodel1']);
    }else{
      this.cond_wrong = false ;
    } 
  }

  getlogin() {
    this.service.VerifierUser(this.user).subscribe(
      res=>{
        console.log(res);
        if (res){
          this.router.navigate(['/choixmodel1']);
        }else{
          this.cond_wrong = false ;
        }   
      },
      err=>{
        console.log(err);
      }
    );
  }


}
