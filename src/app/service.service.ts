import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  socketService: any;

  constructor(private http : HttpClient) {}

  private url = 'http://127.0.0.1:3000' ;

  choixModel = '' ;
  nombreEtudiants = 0 ;
  AllData : any;

  tab : any[] = [] ;


  email = 'moutie@gmail.com';
  password = 'moutie123';

  AjoutUser(data:any) {
    return this.http.post(this.url+'/adduser',data) ;
  } 

  VerifierUser(data:any) {
    return this.http.post(this.url+'/verifyuser',data) ;
  }

  GetAllCertificates(){
    return this.http.get(this.url+'/getallcertifictaes');
  }

  GetAllUsers(){
    return this.http.get(this.url+'/getallusers');
  }

  GetAllAdmins(){
    return this.http.get(this.url+'/getalladmins');
  }
  
  SaveChanges(data:any) {
    return this.http.put(this.url+'/editcertif',data);
  }


}
