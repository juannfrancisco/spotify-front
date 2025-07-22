import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { FormatDataTableGlobal } from 'src/app/shared/util/datatables-option/formatDataTable';
import { ArtistasService } from '../../services/artistas.service';
import { CancionService } from '../../../canciones/services/cancion.service';
import { Artista } from '../../models/artista';
import { Cancion } from '../../../canciones/models/cancion';

@Component({
  selector: 'app-artista-detail',
  templateUrl: './artista-detail.component.html',
  styleUrls: ['./artista-detail.component.scss']
})
export class ArtistaDetailComponent implements AfterViewInit, OnDestroy, OnInit {
  
  artista: Artista | null = null;
  canciones: Cancion[] = [];
  loading: boolean = false;
  error: boolean = false;
  artistaId: number;
  
  // Declaración importante para datatable
  @ViewChildren(DataTableDirective)
  datatableElements: QueryList<DataTableDirective>;
  dtTrigger: Subject<any> = new Subject();
  dtOptions = FormatDataTableGlobal();
  // Fin declaración

  constructor(
    private route: ActivatedRoute,
    private artistasService: ArtistasService,
    private cancionService: CancionService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.artistaId = +params['id'];
      if (this.artistaId) {
        this.loadArtistaDetail();
        this.loadCancionesDelArtista();
      }
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(void 0);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  async loadArtistaDetail() {
    this.loading = true;
    this.error = false;
    try {
      this.artista = await this.artistasService.getById(this.artistaId).toPromise();
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = true;
      console.error('Error cargando artista:', error);
    }
  }

  async loadCancionesDelArtista() {
    this.loading = true;
    this.error = false;
    try {
      // Obtener todas las canciones y filtrar por artista
      const todasLasCanciones = await this.cancionService.getAlls().toPromise();
      this.canciones = todasLasCanciones?.filter(cancion => cancion.artista.id === this.artistaId) || [];
      this.loading = false;
      this.dtOptions = FormatDataTableGlobal();
      this.rerender();
    } catch (error) {
      this.loading = false;
      this.error = true;
      console.error('Error cargando canciones:', error);
    }
  }

  rerender(): void {
    if (this.datatableElements && this.datatableElements.length > 0) {
      this.datatableElements.forEach((dtElement: DataTableDirective) => {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next(void 0);
        });
      });
    } else {
      this.dtTrigger.next(void 0);
    }
  }

  formatDuracion(duracion: number): string {
    const minutos = Math.floor(duracion / 60);
    const segundos = duracion % 60;
    return `${minutos}:${segundos.toString().padStart(2, '0')}`;
  }

  formatNumero(numero: number): string {
    return numero.toLocaleString();
  }
}
