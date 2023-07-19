import { Component, OnInit } from '@angular/core';
import { Rutas, RutasService } from 'src/app/services/rutas.service';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit{

  rutas:Rutas[]=[];

   verRuta(idx: number){
    console.log(idx)
    this.router.navigate(['/ruta',idx])
   }
  constructor(private _rutasservice:RutasService, private router:Router) { }

  ngOnInit(): void {
    this.rutas=this._rutasservice.getRutas();

    console.log(this.rutas)
  }
}
