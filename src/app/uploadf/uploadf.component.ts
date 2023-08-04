import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-uploadf',
  templateUrl: './uploadf.component.html',
  styleUrls: ['./uploadf.component.css']
})
export class UploadfComponent {
  ExcelData: unknown[] | undefined;

  constructor(private service: ServiceService, private router: Router) {}

  selectedFile: File | undefined;
  desiredSheetName: string = '';
  availableSheets: string[] = [];

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    this.desiredSheetName = ''; // Reset the desiredSheetName when a new file is selected

    if (this.selectedFile) {
      // Read the selected Excel file to get the available sheet names
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(this.selectedFile);

      fileReader.onload = (e) => {
        var workBook = XLSX.read(fileReader.result, { type: 'binary' });

        // Get the names of all available sheets in the workbook
        this.availableSheets = workBook.SheetNames;
      };
    } else {
      this.availableSheets = []; // If no file is selected, reset the available sheets list
    }
  }

  onSheetChange(event: any) {
    this.desiredSheetName = event.target.value;
  }

  onReadExcel() {
    // Check if the user has selected a file
    if (!this.selectedFile) {
      console.log('Please choose a file first.');
      return;
    }

    // Check if the user has entered a sheet name
    if (!this.desiredSheetName) {
      console.log('Please select a sheet.');
      return;
    }

    // Read the selected Excel file and extract data from the specified sheet
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(this.selectedFile);

    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });

      // Check if the desired sheet name exists in the workbook
      if (this.availableSheets.indexOf(this.desiredSheetName) === -1) {
        console.log(`Sheet '${this.desiredSheetName}' not found in the Excel file.`);
        return;
      }

      // Get the sheet data as an array of objects
      var sheetData = XLSX.utils.sheet_to_json(workBook.Sheets[this.desiredSheetName], {
        raw: false, // Set raw to false to get formatted cell values
        dateNF: 'yyyy/mm/dd', // Specify the desired date format
      });

      console.log(sheetData); // This will now contain dates in the desired format

      this.ExcelData = sheetData;
      this.service.tab = this.ExcelData;
      console.log(this.service.tab);
      this.router.navigate(['/afficherinfo']);
    };
  }
}
