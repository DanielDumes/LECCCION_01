import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { RutasComponent } from './components/rutas/rutas.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'quienes', component:QuienesComponent},
  {path:'rutas', component:RutasComponent},
  {path:'**', pathMatch:'full',redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
