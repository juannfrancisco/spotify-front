import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { Playlist } from '../../models/playlist';
import { PlaylistsService } from '../../services/playlists.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteModalComponent } from 'src/app/shared/components/confirm-delete-modal/confirm-delete-modal.component';

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
    private service:PlaylistsService,
    private modalService: NgbModal
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

  confirmarEliminar(playlist: Playlist): void {
    const modalRef = this.modalService.open(ConfirmDeleteModalComponent);
    modalRef.componentInstance.itemName = playlist.nombre;
    modalRef.componentInstance.itemType = 'playlist';

    modalRef.result.then((result) => {
      if (result === 'confirm') {
        this.eliminarPlaylist(playlist.id);
      }
    }).catch(() => {
      // Modal dismissed
    });
  }

  private async eliminarPlaylist(id: number): Promise<void> {
    try {
      await this.service.delete(id).toPromise();
      // Refresh the list after successful deletion
      this.callHttpService();
    } catch (error) {
      console.error('Error al eliminar playlist:', error);
      // You might want to show an error message to the user here
    }
  }
  
  //Fin

}
