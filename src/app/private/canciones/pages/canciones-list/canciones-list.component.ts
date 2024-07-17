import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { Cancion } from '../../models/cancion';
import { CancionService } from '../../services/cancion.service';
import { Playlist } from 'src/app/private/playlists/models/playlist';
import { PlaylistsService } from 'src/app/private/playlists/services/playlists.service';

@Component({
  selector: 'app-canciones-list',
  templateUrl: './canciones-list.component.html',
  styleUrls: ['./canciones-list.component.scss']
})
export class CancionesListComponent implements OnInit {
 
  //declaracion importante para datatable
  playlists:Playlist[]=[];
  canciones:Cancion[]=[];
  loading:boolean=false;
  error:boolean=false;
  //Fin declaracion

  constructor(
    private service:CancionService,
    private servicePlaylist:PlaylistsService,
  ) 
  { }
 
 
  ngOnInit(): void {
    this.callHttpService();
    this.getPlaylists();
  }

  async callHttpService(){
    this.loading = true;
    this.error=false;
    try {
      let cancionesLocal = await this.service.getAlls().toPromise();
      console.log(cancionesLocal);
      this.canciones = cancionesLocal;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error=true;
    }
  }


  async getPlaylists(){
    this.loading = true;
    this.error=false;
    try {
      let playlistsLocal = await this.servicePlaylist.getAlls().toPromise();
      console.log(playlistsLocal);
      this.playlists = playlistsLocal;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error=true;
    }
  }
  

  //Fin

}
