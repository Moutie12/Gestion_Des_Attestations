import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent {

  constructor(private service:ServiceService){}

  data :any ;

  ngOnInit() {
    this.service.GetAllAdmins().subscribe(
      res=>{
        this.data = res ;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
