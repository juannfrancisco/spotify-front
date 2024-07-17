import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Playlist } from '../models/playlist';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor( private httpClient: HttpClient) { }

  getId(id:string){
    return this.httpClient.get<Playlist>(`${environment.apiEndpoint}/playlists/${id}`);
  }

  getAlls(){
    return this.httpClient.get<Playlist[]>(`${environment.apiEndpoint}/playlists`);
  }

  save(playlist:Playlist){    
    return this.httpClient.post(`${environment.apiEndpoint}/playlists`, playlist);
  }
  
}
