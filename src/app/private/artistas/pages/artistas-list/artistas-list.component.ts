import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { ArtistasService } from '../../services/artistas.service';
import { Artista } from '../../models/artista';

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
    private service:ArtistasService
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
      let artistasLocal = await this.service.getAlls().toPromise();
      this.artistas = artistasLocal;
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
}
