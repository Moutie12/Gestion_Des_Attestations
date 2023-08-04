import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-choix-model1',
  templateUrl: './choix-model1.component.html',
  styleUrls: ['./choix-model1.component.css']
})
export class ChoixModel1Component {

  constructor(public Service : ServiceService,public router : Router,private elementRef: ElementRef) {}

  choixmodel(model : string) {
    this.Service.choixModel = model ;
    this.router.navigate(['choix1']);
  }


   text = "Choisissez Votre Modèle ... " ;
   displayedText = '';

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    const textLength = this.text.length;
    let currentIndex = 0;
  
    const interval = setInterval(() => {
      this.displayedText = this.text.slice(0, currentIndex);
      currentIndex++;
  
      if (currentIndex > textLength) {
        currentIndex = 0;
      }
    }, 100);
  }
  

}
