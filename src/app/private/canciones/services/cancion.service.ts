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
}
