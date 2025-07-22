import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cancion } from '../models/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor( private httpClient: HttpClient) { }

  getAlls(){
    return this.httpClient.get<Cancion[]>(`${environment.apiEndpoint}/canciones`);
  }

  save(cancion: Cancion){
    return this.httpClient.post(`${environment.apiEndpoint}/canciones`, cancion);
  }

  getById(id: number){
    return this.httpClient.get<Cancion>(`${environment.apiEndpoint}/canciones/${id}`);
  }
  
  delete(id: number){
    return this.httpClient.delete(`${environment.apiEndpoint}/canciones/${id}`);
  }
  
}
