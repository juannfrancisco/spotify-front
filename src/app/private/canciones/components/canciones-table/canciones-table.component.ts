import { AfterViewInit, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Cancion } from '../../models/cancion';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { Playlist } from 'src/app/private/playlists/models/playlist';
import { PlaylistsService } from 'src/app/private/playlists/services/playlists.service';

@Component({
  selector: 'app-canciones-table',
  templateUrl: './canciones-table.component.html',
  styleUrls: ['./canciones-table.component.scss']
})
export class CancionesTableComponent implements AfterViewInit, OnDestroy, OnInit {


  @Input() loading: boolean = false;
  @Input() error: boolean = false;
  @Input() canciones: Cancion[] = [];
  @Input() playlists: Playlist[] = [];
  @ViewChildren(DataTableDirective)
  datatableElements: QueryList<DataTableDirective>;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any;

  constructor( private servicePlaylists:PlaylistsService ) { }


  ngOnInit(): void {
    let options = FormatDataTableGlobal();
    options.buttons = [
      'copy'
    ];
    options.language.lengthMenu = 'Mostrar _MENU_ canciones';
    options.language.info = 'Mostrar _START_ de _END_ de _TOTAL_ canciones';
    options.language.search = '';
    options.language.searchPlaceholder = 'Buscar...';

    this.dtOptions = options;
  }

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

  addCancionToPlaylist(cancion: Cancion, playlist: Playlist) {
    console.log('Cancion:', cancion);
    console.log('Playlist:', playlist);

    this.servicePlaylists.addCancionToPlaylist(cancion, playlist).subscribe( (res) => { 
      console.log('Respuesta:', res);
    } );
  }

}
