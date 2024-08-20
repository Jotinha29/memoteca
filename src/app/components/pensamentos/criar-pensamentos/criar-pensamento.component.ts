import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.interface';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-idea',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CreateIdeaComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.post(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
