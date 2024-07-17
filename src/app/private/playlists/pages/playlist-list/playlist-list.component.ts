import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { Playlist } from '../../models/playlist';
import { PlaylistsService } from '../../services/playlists.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/components/private/confirm-modal/confirm-modal.component';

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
  

  remove( playlist: Playlist) {

    const modalRef =this.modalService.open(ConfirmModalComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.title = 'Ventana de confirmación';
    modalRef.componentInstance.message = `¿Está seguro que desea eliminar la playlist "${playlist.nombre}"?`;
    modalRef.result.then((result) => {
      if(result == 'confirm'){
        this.removePlaylist(playlist);
      }
    });
  }


  removePlaylist(playlist: Playlist) {
    this.service.remove(playlist).subscribe(() => {
      this.callHttpService();
    });
  }

  //Fin

}
