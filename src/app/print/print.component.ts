import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent {
  certif = false ;
  attestation1 = false ;
  attestation2 = false ;
  attestation3 = false ;
  choix = '' ;
  move = false ;
  @ViewChild('certificateDiv', { static: false }) certificateDiv: ElementRef | undefined;
  qrCodeDataUrl: SafeUrl = '';
  constructor(private renderer: Renderer2,public service : ServiceService,
    private sanitizer: DomSanitizer){}

  print() 
  {
    this.move = true ;
    const printStyles = `
      @media print {
        @page {
          size: landscape;
        }
      }
    `;
    const style = this.renderer.createElement('style');
    this.renderer.appendChild(style, this.renderer.createText(printStyles));
    this.renderer.appendChild(document.head, style);

    window.print();

    
    this.renderer.removeChild(document.head, style);
  }

  load = true ;
  change = () => {
    this.load = false ;
  }

  ngOnInit() {
    const timeout = setTimeout(this.change,3000);
    if (this.service.choixModel == "certificate")
    {
      this.certif = true ;
    }else if (this.service.choixModel == "attestation1")
    {
      this.attestation1 = true ;
    }else if (this.service.choixModel == "attestation2")
    {
      this.attestation2 = true ;
    }else{
      this.attestation3 = true ;
    }



  }

}