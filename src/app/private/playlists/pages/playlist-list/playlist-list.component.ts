import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { Playlist } from '../../models/playlist';
import { PlaylistsService } from '../../services/playlists.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements AfterViewInit, OnDestroy, OnInit {
 
  //declaracion importante para datatable
  playlists:Playlist[]=[];
  loading:boolean=false;
  error:boolean=false;
  @ViewChildren(DataTableDirective)
  datatableElements: QueryList<DataTableDirective>;
  dtTrigger: Subject<any> = new Subject();
  dtOptions = FormatDataTableGlobal();
  //Fin declaracion

  listViewProjectDto: any[];

  constructor(
    private service:PlaylistsService
  ) 
  { }
 
 
  ngOnInit(): void {
    this.callHttpService();
    
  }

  async callHttpService(){
    this.loading = true;
    this.error=false;
    try {
      let playlistsLocal = await this.service.getAlls().toPromise();
      this.playlists = playlistsLocal;
      this.loading = false;
      this.dtOptions = FormatDataTableGlobal();
      this.rerender();
    } catch (error) {
      this.loading = false;
      this.error=true;
    }
  }

  //importante para datatable
  ngAfterViewInit(): void {
    this.dtTrigger.next(0);

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

  }

  rerender(): void {
      this.datatableElements.forEach((dtElement: DataTableDirective) => {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next(0);
        });
      });
  }

  deletePlaylist(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta playlist?')) {
      this.service.removeSongFromPlaylist(id, 0).subscribe({
        next: () => {
          
        },
        error: (error) => {
          console.error('Error al eliminar la playlist:', error);
        
        }
      });
    }
  }
  
  //Fin

}
