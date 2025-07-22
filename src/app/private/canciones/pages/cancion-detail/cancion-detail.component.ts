import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancion } from '../../models/cancion';
import { CancionService } from '../../services/cancion.service';
import { Playlist } from '../../../playlists/models/playlist';
import { PlaylistsService } from '../../../playlists/services/playlists.service';

@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.scss']
})
export class CancionDetailComponent implements OnInit {

  cancion: Cancion | null = null;
  playlists: Playlist[] = [];
  selectedPlaylistId: number | null = null;
  loading: boolean = false;
  error: boolean = false;
  addingToPlaylist: boolean = false;
  cancionId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cancionService: CancionService,
    private playlistsService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.cancionId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.cancionId) {
      this.loadCancion();
      this.loadPlaylists();
    } else {
      this.router.navigate(['/private/canciones/list']);
    }
  }

  loadCancion(): void {
    this.loading = true;
    this.error = false;
    
    this.cancionService.getById(this.cancionId).subscribe({
      next: (cancion) => {
        this.cancion = cancion;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar la canción:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  loadPlaylists(): void {
    this.playlistsService.getAlls().subscribe({
      next: (playlists) => {
        this.playlists = playlists;
      },
      error: (error) => {
        console.error('Error al cargar las playlists:', error);
      }
    });
  }

  addToPlaylist(): void {
    if (!this.selectedPlaylistId) {
      alert('Por favor selecciona una playlist');
      return;
    }

    this.addingToPlaylist = true;
    
    this.playlistsService.addSongToPlaylist(this.selectedPlaylistId, this.cancionId).subscribe({
      next: () => {
        alert('Canción agregada a la playlist exitosamente');
        this.selectedPlaylistId = null;
        this.addingToPlaylist = false;
      },
      error: (error) => {
        console.error('Error al agregar la canción a la playlist:', error);
        alert('Error al agregar la canción a la playlist');
        this.addingToPlaylist = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/private/canciones/list']);
  }

  formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
