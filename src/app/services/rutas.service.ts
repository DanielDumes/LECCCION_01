import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  private Rutas:Rutas[]=[
    {
      ciuor: 'Quito',
      ciudest: 'Guayaquil',
      precio: '50',
      desc: 'Ruta desde la capital hasta la ciudad costera de Guayaquil.',
      tipo: 'externo'
    },
    {
      ciuor: 'Cuenca',
      ciudest: 'Loja',
      precio: '30',
      desc: 'Ruta dentro de la región sur del país, desde Cuenca hasta Loja.',
      tipo: 'interno'
    },
    {
      ciuor: 'Ambato',
      ciudest: 'Riobamba',
      precio: '20',
      desc: 'Ruta corta entre dos ciudades de la Sierra ecuatoriana.',
      tipo: 'interno'
    },
    {
      ciuor: 'Esmeraldas',
      ciudest: 'Manta',
      precio: '40',
      desc: 'Ruta desde la costa norte de Esmeraldas hasta la ciudad de Manta.',
      tipo: 'externo'
    },
    {
      ciuor: 'Guayaquil',
      ciudest: 'Salinas',
      precio: '25',
      desc: 'Ruta desde la ciudad portuaria de Guayaquil hasta el balneario de Salinas.',
      tipo: 'externo'
    },
    {
      ciuor: 'Quito',
      ciudest: 'Latacunga',
      precio: '15',
      desc: 'Ruta corta desde la capital hasta Latacunga en la Sierra ecuatoriana.',
      tipo: 'interno'
    },
    {
      ciuor: 'Loja',
      ciudest: 'Zamora',
      precio: '35',
      desc: 'Ruta hacia la zona amazónica del país, desde Loja hasta Zamora.',
      tipo: 'externo'
    },
    {
      ciuor: 'Riobamba',
      ciudest: 'Baños',
      precio: '18',
      desc: 'Ruta turística desde Riobamba hasta la famosa ciudad termal de Baños.',
      tipo: 'interno'
    },
    {
      ciuor: 'Manta',
      ciudest: 'Portoviejo',
      precio: '22',
      desc: 'Ruta costera entre dos importantes ciudades de Manabí.',
      tipo: 'interno'
    },
    {
      ciuor: 'Quito',
      ciudest: 'Mindo',
      precio: '30',
      desc: 'Ruta desde la capital hacia el pintoresco pueblo de Mindo en la selva nublada.',
      tipo: 'interno'
    }
  ];
  
  //retorna todos los rutas
  getRutas(){
    return this.Rutas;
  }
  // retorna 1 heroe segun indice
  getRuta(idx:number){
    return this.Rutas[idx];
  }
  encontrarRuta(term: string): Rutas[]{
    return this.Rutas.filter(ruta => 
      ruta.ciuor.toLowerCase().includes(term.toLowerCase()));
  }
  
  constructor() { 
  
  console.log("Sevicio listo para usar...!");
  }
}

export interface Rutas{
  ciuor: string;
  ciudest: string;
  precio: string;
  desc: string;
  tipo: string;
}
