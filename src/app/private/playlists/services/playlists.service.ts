import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Playlist } from '../models/playlist';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor( private httpClient: HttpClient) { }

  getAlls(){
    return this.httpClient.get<Playlist[]>(`${environment.apiEndpoint}/playlists`);
  }

  save(playlist: Playlist){
    return this.httpClient.post(`${environment.apiEndpoint}/playlists`, playlist);
  }

  getById(id: number){
    return this.httpClient.get<Playlist>(`${environment.apiEndpoint}/playlists/${id}`);
  }

  removeSongFromPlaylist(playlistId: number, cancionId: number){
    return this.httpClient.delete(`${environment.apiEndpoint}/playlists/${playlistId}/canciones/${cancionId}`);
  }

  addSongToPlaylist(playlistId: number, cancionId: number){
    return this.httpClient.post(`${environment.apiEndpoint}/playlists/${playlistId}/canciones/${cancionId}`, {});
  }
  
}
