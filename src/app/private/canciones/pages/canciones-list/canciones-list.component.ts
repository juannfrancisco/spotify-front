import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { Cancion } from '../../models/cancion';
import { CancionService } from '../../services/cancion.service';

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
    private service:CancionService
  ) 
  { }
 
 
  ngOnInit(): void {
    this.callHttpService();
    this.dtOptions = FormatDataTableGlobal();
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
  
  //Fin

}
