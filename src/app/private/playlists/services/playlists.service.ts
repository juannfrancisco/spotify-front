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
  
}
