import { Component } from '@angular/core';
import * as XLSX from 'xlsx' ;
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  constructor(private service : ServiceService,private router : Router){}

  ExcelData: any =[] ;

ReadExcel(event: any) {
  let file = event.target.files[0]; // Use "files" instead of "file" to access the selected file
  let fileReader = new FileReader();
  fileReader.readAsBinaryString(file);

  fileReader.onload = (e) => {
    var workBook = XLSX.read(fileReader.result, { type: 'binary' });
    var sheetNames = workBook.SheetNames;
    this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);

    
    console.log(this.ExcelData);
    this.service.tab = this.ExcelData ;
    this.router.navigate(['/print']);
  }
}


}
