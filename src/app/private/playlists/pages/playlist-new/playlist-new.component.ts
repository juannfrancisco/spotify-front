import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Playlist } from '../../models/playlist';
import { PlaylistsService } from '../../services/playlists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-new',
  templateUrl: './playlist-new.component.html',
  styleUrls: ['./playlist-new.component.scss']
})
export class PlaylistNewComponent implements OnInit {

  playlist: Playlist;
  loading: boolean = false;
  error: boolean = false;
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private service: PlaylistsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id: '', 
      nombre: '',
      fechaCreacion: '',
      canciones: []
    });
  }

  formSubmit() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
    } else {
      // Solo tomar el nombre y establecer canciones como array vacío
      this.playlist = {
        nombre: this.categoryForm.get('nombre')?.value,
        canciones: []
      };
      this.callService(this.playlist);
      this.router.navigate(['/maintainer/playlists/list']);
      console.log(this.playlist);
    }
  }

  async callService(playlist: Playlist) {
    this.loading = true;
    this.error = false;
    try {
      let result = await this.service.save(playlist).toPromise();
      console.log(result);
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
      this.error = true;
    }
  }
}
