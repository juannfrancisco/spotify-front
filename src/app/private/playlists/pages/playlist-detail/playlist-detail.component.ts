import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Playlist } from '../../models/playlist';
import { PlaylistsService } from '../../services/playlists.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit, OnDestroy {

  playlist: Playlist | null = null;
  loading = false;
  error = false;
  playlistId: number = 0;

  // DataTable configuration
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playlistsService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.initDataTable();
    this.loadPlaylistDetail();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private initDataTable(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'assets/datatables/spanish.json'
      }
    };
  }

  private loadPlaylistDetail(): void {
    this.route.params.subscribe(params => {
      this.playlistId = +params['id'];
      if (this.playlistId) {
        this.getPlaylistById(this.playlistId);
      }
    });
  }

  private getPlaylistById(id: number): void {
    this.loading = true;
    this.error = false;
    
    this.playlistsService.getById(id).subscribe({
      next: (playlist: Playlist) => {
        this.playlist = playlist;
        this.loading = false;
        this.dtTrigger.next(null);
      },
      error: (error) => {
        console.error('Error al cargar la playlist:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  removeSongFromPlaylist(cancionId: number): void {
    if (!this.playlist || !cancionId || !this.playlist.id) return;

    if (confirm('¿Estás seguro de que quieres eliminar esta canción de la playlist?')) {
      this.playlistsService.removeSongFromPlaylist(this.playlist.id, cancionId).subscribe({
        next: () => {
          // Actualizar la playlist local removiendo la canción
          if (this.playlist) {
            this.playlist.canciones = this.playlist.canciones.filter(cancion => cancion.id !== cancionId);
          }
        },
        error: (error) => {
          console.error('Error al eliminar la canción:', error);
          alert('Error al eliminar la canción de la playlist');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/maintainer/playlists/list']);
  }

  editPlaylist(): void {
    if (this.playlist?.id) {
      this.router.navigate(['/maintainer/playlists/edit', this.playlist.id]);
    }
  }

  formatDuration(duracion: number): string {
    const minutes = Math.floor(duracion / 60);
    const seconds = duracion % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}
