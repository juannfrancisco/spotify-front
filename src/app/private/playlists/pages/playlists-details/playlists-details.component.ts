import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute } from '@angular/router';
import { PlaylistsService } from '../../services/playlists.service';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-playlists-details',
  templateUrl: './playlists-details.component.html',
  styleUrls: ['./playlists-details.component.scss']
})
export class PlaylistsDetailsComponent implements AfterViewInit, OnDestroy, OnInit {

  //declaracion importante para datatable
  loading: boolean = false;
  error: boolean = false;
  playlists: Playlist[];
  playlist: Playlist;
  duracionTotal:string = "";
  id: string;
  @ViewChildren(DataTableDirective)
  datatableElements: QueryList<DataTableDirective>;
  dtTrigger: Subject<any> = new Subject();
  dtOptions = FormatDataTableGlobal();
  //Fin declaracion

  listViewProjectDto: any[];

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private service: PlaylistsService) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPlaylistId(this.id);

    this.listViewProjectDto = [];
    this.dtOptions = FormatDataTableGlobal();

    this.calledService();
  }

  getPlaylistId(id: string) {
    this.loading = true;
    this.error = false;

    this.service.getId(id).subscribe((data) => {
      this.playlist = data;
      let duracionTotalSeg =  this.playlist.canciones.reduce((a, b) => a + b.duracion, 0);
      let horas = Math.floor(duracionTotalSeg / 3600);
      let minutos = Math.floor((duracionTotalSeg % 3600) / 60);
      let segundos = duracionTotalSeg % 60;
      this.duracionTotal = `${horas}h ${minutos}m ${segundos}s`;
      this.getPlaylists();
    }, (error) => {
      this.error = true
    }, () => {
      this.loading = false
    });
  }


  getPlaylists() {

    this.service.getAlls().subscribe((data) => {
      this.playlists = data;
    }, (error) => {
      this.error = true
    }, () => {
      this.loading = false
    });
  }


  calledService() {

    this.spinner.show();
    for (var i = 1; i < 50; i++) {
      let info = {
        data1: "20/03/2022",
        data2: "Nube GCP",
        data3: "Google",
        data4: "Nube",
        data5: "--",
        data6: 20,
        data7: "20 UF",
        data8: "15",
        data9: "4000",
        data10: "SI"
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
