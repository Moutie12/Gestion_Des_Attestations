import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private service:ServiceService){}

  data :any ;

  ngOnInit() {
    this.service.GetAllUsers().subscribe(
      res=>{
        this.data = res ;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
