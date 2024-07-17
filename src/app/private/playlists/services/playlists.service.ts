import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Playlist } from '../models/playlist';
import { Cancion } from '../../canciones/models/cancion';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  
  
  addCancionToPlaylist(cancion: Cancion, playlist: Playlist) {
    return this.httpClient.put(`${environment.apiEndpoint}/playlists/${playlist.id}/canciones`, cancion);
  }

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

  remove(playlist:Playlist){
    return this.httpClient.delete(`${environment.apiEndpoint}/playlists/${playlist.id}`);
  }
  
}
