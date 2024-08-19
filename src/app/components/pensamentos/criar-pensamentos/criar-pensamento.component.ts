import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-idea',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CreateIdeaComponent implements OnInit {

  pensamento = { 
    id: '1',
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
