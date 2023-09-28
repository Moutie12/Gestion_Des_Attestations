import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manipulate-certif',
  templateUrl: './manipulate-certif.component.html',
  styleUrls: ['./manipulate-certif.component.css']
})
export class ManipulateCertifComponent {
  constructor(public service:ServiceService,private location: Location){}

  data = {
    id : '',
    state : true
  }

  refreshPage(): void {
    this.location.go(this.location.path()); // Refresh the current route
  }

  save(id:any,state:any) {
    this.data.id = id ;
    this.data.state = !state ;
    this.service.SaveChanges(this.data).subscribe(
      res=>{
        console.log(res);
        this.refreshPage();
      },
      err=>{
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
      this.service.GetAllCertificates().subscribe(
        res=>{
          console.log(typeof(res));
          console.log(res);
          this.service.AllData = res ;
        },
        err=>{
          this.service.AllData = err;
        }
      );
  }

}
