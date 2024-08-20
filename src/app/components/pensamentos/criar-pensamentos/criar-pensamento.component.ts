import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.interface';

@Component({
  selector: 'app-create-idea',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CreateIdeaComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Apredendo Angular',
    autoria: 'Dev',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){

  }

  cancelar(){

  }

}
