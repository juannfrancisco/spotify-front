import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownSettingsStado } from 'src/app/shared/util/multiselect-option/multiselect-option';
import { Playlist } from '../../models/playlist';
import { Router } from '@angular/router';
import { PlaylistsService } from '../../services/playlists.service';

@Component({
  selector: 'app-playlists-new',
  templateUrl: './playlists-new.component.html',
  styleUrls: ['./playlists-new.component.scss']
})
export class PlaylistsNewComponent implements OnInit {

  playlist:Playlist;
  loading:boolean=false;
  error:boolean=false;
  closeResult = '';
  categoryForm: FormGroup;
  dropdownSettings = {};

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private service:PlaylistsService, 
  ) {

   }

  ngOnInit(): void {
    this.dropdownSettings = DropdownSettingsStado();

    this.categoryForm = this.fb.group(
      {
        nombre: ''
      }
    );
  }

  formSubmit(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
    }else{
      this.playlist = this.categoryForm.value;
      this.callService(this.playlist);
      this.router.navigate(['/maintainer/playlists/list']);
      console.log(this.playlist);
    }
  }


  async callService( playlist:Playlist){
    this.loading = true;
    this.error = false;
    try{
      let result = await this.service.save(playlist).toPromise();
      console.log(result);
      this.loading = false;
    }catch(error){
      console.log(error);
      this.loading = false;
      this.error = true;
    }
  }

  onItemSelect(item: any) {
      console.log(item);
  }
  
  onViewMoth(){
    console.log(this.categoryForm.get('month_date').value);
  }

  onViewDay(){
    console.log(this.categoryForm.get('day_date').value);
  }
  
}

