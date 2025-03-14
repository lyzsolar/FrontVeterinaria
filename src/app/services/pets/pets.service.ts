import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pets } from '../../models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private url = 'http://localhost:8080/Pets';

  constructor(private http : HttpClient) { }

  getPets(): Observable<Pets[]> {
    return this.http.get<Pets[]>(this.url);
  }

  addPets(pet: Pets): Observable<Pets> {
    return this.http.post<Pets>(this.url, pet);
  }

  deletePet(id: number): Observable<Pets> {
    return this.http.delete<Pets>(this.url + '/' + id);
  }
}
