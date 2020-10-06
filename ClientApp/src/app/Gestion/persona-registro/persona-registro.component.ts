import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  personas: Persona[];
  constructor(private personaService: PersonaService) { }



  ngOnInit(): void {
    this.persona = new Persona;
    this.get();
  }


  add() {
    if (this.validar() == false) {

      alert(' Se agrego una nueva pesona' + JSON.stringify(this.persona));
      this.personaService.post(this.persona);


    } else {
      alert("Llene todos los campos");
    }
  }

  calcularValorTotal(): number {
    var total;
    for (let i = 0; i < this.personas.length; i++) {
      total = total + this.personas[i].valor;
    }
    return total;
  }

  validar(): boolean {
    if (this.persona.sexo == "" || this.persona.departamento == "" || this.persona.ciudad == ""
      || this.persona.edad == null || this.persona.fecha == "" || this.persona.modalidad == "" ||
      this.persona.nombre == "" || this.persona.valor == null || this.persona.identificacion == "") {
      return true
    } else {
      return false
    }

  }

  get() {
    this.personas = this.personaService.get();
  }





}
