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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManipulateCertifComponent } from './manipulate-certif/manipulate-certif.component';
import { UsersComponent } from './users/users.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { SignupComponent } from './signup/signup.component';
import { AdminsComponent } from './admins/admins.component';

const routes: Routes = [
  { path : '' , redirectTo:'/signin' , pathMatch:'full'},
  { path : 'nombreetudiants', component:NombreEtudinatsComponent},
  { path : 'signup', component:SignupComponent},
  { path : 'generator' , component:GeneratorComponent},
  { path: 'afficherinfo' , component:AfficherInfoComponent},
  { path : 'print' , component: PrintComponent },
  { path : 'dashboard', component: DashboardComponent},
  { path : 'dashboard/users', component: UsersComponent},
  { path : 'dashboard/admins', component: AdminsComponent},
  { path : 'dashboard/editprofil', component: EditprofilComponent},
  { path : 'manipuler_certif' , component : ManipulateCertifComponent},
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
