import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from 'ngx-qrcode2'; // Import the NgxQRCodeModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { FormsModule } from '@angular/forms';
import { PrintComponent } from './print/print.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { UploadfComponent } from './uploadf/uploadf.component';
import { NombreEtudinatsComponent } from './nombre-etudinats/nombre-etudinats.component';
import { ChoixModel1Component } from './choix-model1/choix-model1.component';
import { Choix1Component } from './choix1/choix1.component';
import { AfficherInfoComponent } from './afficher-info/afficher-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    PrintComponent,
    SigninComponent,
    UploadfileComponent,
    UploadfComponent,
    NombreEtudinatsComponent,
    ChoixModel1Component,
    Choix1Component,
    AfficherInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
