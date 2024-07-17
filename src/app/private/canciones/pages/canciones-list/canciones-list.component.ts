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
export class CancionesListComponent implements OnInit {
 
  //declaracion importante para datatable
  canciones:Cancion[]=[];
  loading:boolean=false;
  error:boolean=false;
  //Fin declaracion

  constructor(
    private service:CancionService
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
    } catch (error) {
      this.loading = false;
      this.error=true;
    }
  }
  

  //Fin

}
