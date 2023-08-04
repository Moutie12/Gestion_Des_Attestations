import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}

  choixModel = '' ;
  nombreEtudiants = 0 ;

  tab : any[] = [] ;

  email = 'moutie@gmail.com';
  password = 'moutie123';
}
