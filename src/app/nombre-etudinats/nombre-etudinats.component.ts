import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nombre-etudinats',
  templateUrl: './nombre-etudinats.component.html',
  styleUrls: ['./nombre-etudinats.component.css']
})
export class NombreEtudinatsComponent {
  constructor(public service : ServiceService,public router : Router){}

  pass_to_generator() {
    this.router.navigate(['/generator']);
  }

}
