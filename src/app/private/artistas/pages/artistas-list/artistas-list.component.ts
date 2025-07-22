import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { ArtistasService } from '../../services/artistas.service';
import { Artista } from '../../models/artista';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteModalComponent } from 'src/app/shared/components/confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-artistas-list',
  templateUrl: './artistas-list.component.html',
  styleUrls: ['./artistas-list.component.scss']
})
export class ArtistasListComponent implements AfterViewInit, OnDestroy, OnInit {
 
  //declaracion importante para datatable
  artistas:Artista[]=[];
  loading:boolean=false;
  error:boolean=false;
  @ViewChildren(DataTableDirective)
  datatableElements: QueryList<DataTableDirective>;
  dtTrigger: Subject<any> = new Subject();
  dtOptions = FormatDataTableGlobal();
  //Fin declaracion


  constructor(
    private service:ArtistasService,
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
      let artistasLocal = await this.service.getAlls().toPromise();
      this.artistas = artistasLocal;
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

  confirmarEliminar(artista: Artista): void {
    const modalRef = this.modalService.open(ConfirmDeleteModalComponent);
    modalRef.componentInstance.itemName = artista.nombre;
    modalRef.componentInstance.itemType = 'artista';

    modalRef.result.then((result) => {
      if (result === 'confirm') {
        this.eliminarArtista(artista.id);
      }
    }).catch(() => {
      // Modal dismissed
    });
  }

  private async eliminarArtista(id: number): Promise<void> {
    try {
      await this.service.delete(id).toPromise();
      // Refresh the list after successful deletion
      this.callHttpService();
    } catch (error) {
      console.error('Error al eliminar artista:', error);
      // You might want to show an error message to the user here
    }
  }
}
