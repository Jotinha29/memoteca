import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
}

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(id!).subscribe((pensamento) => {
        this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.service.edit(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
  })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
