import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-afficher-info',
  templateUrl: './afficher-info.component.html',
  styleUrls: ['./afficher-info.component.css']
})
export class AfficherInfoComponent {
  constructor(public service : ServiceService){}

  isHiddenArray: boolean[] = [];
  

  srcimg = 'https://cdn-icons-png.flaticon.com/512/929/929416.png' ;

  verifierDonnees(name: string,dateD : string, dateF : string, theme : string) {
      if (name == null || dateD == null || dateF == null || theme == null || name == '' || dateD == '' || 
      dateF == '' || theme == '') {
        this.srcimg =  'https://cdn-icons-png.flaticon.com/512/929/929416.png';
      }else{
        this.srcimg =  '../../assets/images/accept.png';
      }
      return this.srcimg ;
  }

  ngAfterViewInit() {
    this.service.tab.forEach((item, index) => {
      setTimeout(() => {
        this.isHiddenArray[index] = false;
      }, (index + 1) * 300);
    });
  }

  isHidden(index: number): boolean {
    return this.isHiddenArray[index] === undefined || this.isHiddenArray[index];
  }
}
