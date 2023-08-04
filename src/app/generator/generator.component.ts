import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  constructor(public service : ServiceService){}

  load = true ;

  cond  = false ;
  cond2 = false ;


  number1 : number = 1 ;


  user = {
    number2 : this.number1 ,
    name : '',
    dateD : '',
    dateF : '',
    theme : ''
  } 



  cond1() {
    this.cond = true ;
  }
  print() {
    this.cond2 = true ;
  }

  add() {
    if (this.number1 <= (this.service.nombreEtudiants-1))
    {
      this.number1++;
    this.service.tab.push(this.user);
    console.log(this.service.tab);
    this.user = {
      number2 : this.number1 ,
      name : '',
      dateD : '',
      dateF : '',
      theme : ''
    }
  }else{
    this.service.tab.push(this.user);
    this.cond1();
  }
}

  back() {
    this.number1 -- ;
    this.service.tab.pop() ;
    this.user = {
      number2 : this.number1 ,
      name : '',
      dateD : '',
      dateF : '',
      theme : ''
    }
    console.log(this.service.tab);
  }

  change = () => {
    this.load = false ;
  }

  ngOnInit() {
    const timeout = setTimeout(this.change,2000);
  }

  

}
