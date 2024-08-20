import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API);
  }

  post(pensamento: Pensamento):Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }
}
