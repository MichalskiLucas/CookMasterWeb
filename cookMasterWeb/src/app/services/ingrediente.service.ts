import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Ingrediente } from '../models/objetos/ingrediente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  findAllIngredientes(): Observable<Ingrediente[]>{
    const url = `${this.apiUrl}/ingrediente`;
    return this.http.get<Ingrediente[]>(url);
  }
}
