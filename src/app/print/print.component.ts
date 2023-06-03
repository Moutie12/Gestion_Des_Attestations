import { Component, Renderer2 } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent {
  constructor(private renderer: Renderer2,public service : ServiceService){}

  print() 
  {
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

    // Remove the added style after printing
    this.renderer.removeChild(document.head, style);
  }
}
