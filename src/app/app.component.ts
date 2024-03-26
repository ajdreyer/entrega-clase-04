import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'entrega-clase-04';

  studentsTodos: Alumno[] = [
    new Alumno("Alejandro", "Dreyer", 9.5),
    new Alumno("Rogelio", "Federer", 8),
    new Alumno("Juan", "Perez", 7),
    new Alumno("Roberto", "Perfumo", 5.5),
    new Alumno("Norberto", "Alonso", 4),
    new Alumno("Andres", "Murray", 3.8),
    new Alumno("Roberto", "Rodriguez", 10),
    new Alumno("Carlos", "Dominguez", 4)
  ];

  studentsRegular: Alumno[] = [
    new Alumno("Alejandro", "Dreyer", 9.5),
    new Alumno("Rogelio", "Federer", 8),
    new Alumno("Juan", "Perez", 7)
  ];

  studentsIrregular: Alumno[] = [
    new Alumno("Roberto", "Perfumo", 5.5),
    new Alumno("Norberto", "Alonso", 4),
    new Alumno("Andres", "Murray", 3.8),
  ];

  studentsBaja: Alumno[] = [
    new Alumno("Roberto", "Rodriguez", 10),
    new Alumno("Carlos", "Dominguez", 4),
  ]

  mostarListadoRegulares = false;
  mostarListadoIrregulares = false;
  mostarListadoBaja= false;
  mostrarListadoTodos = true;

  onTipoAlumnosSelectChange(ev: Event) {
    const elemento = ev.target as HTMLSelectElement;
    const selectedValue = elemento.value;
  
    if(selectedValue == "Todos"){  
      this.mostarListadoRegulares = false;
      this.mostarListadoIrregulares = false;
      this.mostarListadoBaja = false;
      this.mostrarListadoTodos = true;
    }
    else if(selectedValue == "Regular"){  
      this.mostarListadoRegulares = true;
      this.mostarListadoIrregulares = false;
      this.mostarListadoBaja = false;
      this.mostrarListadoTodos = false;
    }
    else if(selectedValue == "Irregular"){  
      this.mostarListadoRegulares = false;
      this.mostarListadoIrregulares = true;
      this.mostarListadoBaja = false;
      this.mostrarListadoTodos = false;
    }
    else if(selectedValue == "Baja"){  
      this.mostarListadoRegulares = false;
      this.mostarListadoIrregulares = false;
      this.mostarListadoBaja = true;
      this.mostrarListadoTodos = false;
    }
  }
}

class Alumno{
  Nombre: string;
  Apellido: string;
  Promedio: number;

  constructor(nombre:string, apellido:string,promedio:number){
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Promedio = promedio;
  }
}