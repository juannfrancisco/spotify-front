import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements AfterViewInit, OnDestroy, OnInit {
 
  //declaracion importante para datatable
  @ViewChildren(DataTableDirective)
  datatableElements: QueryList<DataTableDirective>;
  dtTrigger: Subject<any> = new Subject();
  dtOptions = FormatDataTableGlobal();
  //Fin declaracion

  listViewProjectDto: any[];

  constructor(private spinner: NgxSpinnerService,

  ) 
  { }
 
 
  ngOnInit(): void {


    this.listViewProjectDto = [];
    this.dtOptions = FormatDataTableGlobal();
    
    this.calledService();
  }

  calledService(){

    this.spinner.show();
    for(var i = 1; i < 50; i++){
      let info = {
        data1:"20/03/2022",
        data2:"Nube GCP",
        data3:"Google",
        data4:"Nube",
        data5:"--",
        data6:20,
        data7:"20 UF",
        data8:"15",
        data9:"4000",
        data10:"SI"
      };
      this.listViewProjectDto.push(info);
    }
    this.spinner.hide();
   

 
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
