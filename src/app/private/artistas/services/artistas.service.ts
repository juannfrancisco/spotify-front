import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Artista } from '../models/artista';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {
  constructor( private httpClient: HttpClient) { }

  getAlls(){
    return this.httpClient.get<Artista[]>(`${environment.apiEndpoint}/artistas`);
  }

  getById(id: number){
    return this.httpClient.get<Artista>(`${environment.apiEndpoint}/artistas/${id}`);
  }

  save(artista: Artista){
    return this.httpClient.post(`${environment.apiEndpoint}/artistas`, artista);
  }
  
  delete(id: number){
    return this.httpClient.delete(`${environment.apiEndpoint}/artistas/${id}`);
  }

}
