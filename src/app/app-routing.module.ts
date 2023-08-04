import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintComponent } from './print/print.component';
import { GeneratorComponent } from './generator/generator.component';
import { generate } from 'rxjs';
import { SigninComponent } from './signin/signin.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { UploadfComponent } from './uploadf/uploadf.component';
import { NombreEtudinatsComponent } from './nombre-etudinats/nombre-etudinats.component';
import { ChoixModel1Component } from './choix-model1/choix-model1.component';
import { Choix1Component } from './choix1/choix1.component';
import { AfficherInfoComponent } from './afficher-info/afficher-info.component';

const routes: Routes = [
  { path : '' , redirectTo:'/signin' , pathMatch:'full'},
  { path : 'nombreetudiants', component:NombreEtudinatsComponent},
  { path : 'generator' , component:GeneratorComponent},
  { path: 'afficherinfo' , component:AfficherInfoComponent},
  { path : 'print' , component: PrintComponent },
  { path : 'signin' , component: SigninComponent},
  { path: 'uploadfile', component:UploadfComponent},
  { path: 'choixmodel1', component:ChoixModel1Component},
  { path: 'choix1', component:Choix1Component},
  { path : '**' , component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
