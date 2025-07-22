import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { Cancion } from '../../models/cancion';
import { CancionService } from '../../services/cancion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteModalComponent } from 'src/app/shared/components/confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-canciones-list',
  templateUrl: './canciones-list.component.html',
  styleUrls: ['./canciones-list.component.scss']
})
export class CancionesListComponent implements AfterViewInit, OnDestroy, OnInit {
 
  //declaracion importante para datatable
  canciones:Cancion[]=[];
  loading:boolean=false;
  error:boolean=false;
  @ViewChildren(DataTableDirective)
  datatableElements: QueryList<DataTableDirective>;
  dtTrigger: Subject<any> = new Subject();
  dtOptions = FormatDataTableGlobal();
  //Fin declaracion

  listViewProjectDto: any[];

  constructor(
    private service:CancionService,
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
      let cancionesLocal = await this.service.getAlls().toPromise();
      console.log(cancionesLocal);
      this.canciones = cancionesLocal;
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

  confirmarEliminar(cancion: Cancion): void {
    const modalRef = this.modalService.open(ConfirmDeleteModalComponent);
    modalRef.componentInstance.itemName = cancion.nombre;
    modalRef.componentInstance.itemType = 'cancion';

    modalRef.result.then((result) => {
      if (result === 'confirm') {
        this.eliminarCancion(cancion.id);
      }
    }).catch(() => {
      // Modal dismissed
    });
  }

  private async eliminarCancion(id: number): Promise<void> {
    try {
      await this.service.delete(id).toPromise();
      // Refresh the list after successful deletion
      this.callHttpService();
    } catch (error) {
      console.error('Error al eliminar canción:', error);
      // You might want to show an error message to the user here
    }
  }
  
  //Fin

}
