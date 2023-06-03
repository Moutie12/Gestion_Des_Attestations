import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintComponent } from './print/print.component';
import { GeneratorComponent } from './generator/generator.component';
import { generate } from 'rxjs';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path : '' , redirectTo:'/generator' , pathMatch:'full'}, 
  { path : 'generator' , component:GeneratorComponent},
  { path : 'print' , component: PrintComponent },
  { path : 'signin' , component: SigninComponent},
  { path : '**' , component: GeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
