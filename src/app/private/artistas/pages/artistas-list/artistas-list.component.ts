import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { ArtistasService } from '../../services/artistas.service';
import { Artista } from '../../models/artista';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/components/private/confirm-modal/confirm-modal.component';

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

  remove(artista: Artista) {
    const modalRef =this.modalService.open(ConfirmModalComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.title = 'Ventana de confirmación';
    modalRef.componentInstance.message = `¿Está seguro que desea eliminar la playlist "${artista.nombre}"?`;
    modalRef.result.then((result) => {
      if(result == 'confirm'){
        this.removeArtista(artista);
      }
    });
  }

  removeArtista(artista: Artista) {
    this.service.remove(artista).subscribe(() => {
      this.callHttpService();
    });
  }


}
