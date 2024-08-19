import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIdeaComponent } from './components/pensamentos/criar-pensamentos/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path : 'criarPensamento',
    component: CreateIdeaComponent
  },
  {
    path : 'listarPensamento',
    component: ListarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
