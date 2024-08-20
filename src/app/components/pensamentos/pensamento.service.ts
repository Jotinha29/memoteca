import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento.interface';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API).pipe(
      catchError(this.handleError)
    );
  }

  post(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<void> {
    const url = `${this.API}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url).pipe(
      catchError(this.handleError)
    );
  }

  edit(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )
  }

  private handleError(error: any) {
    console.error('Ocorreu um erro', error);
    return throwError(() => new Error('Erro na comunicação com a API'));
  }

}
