import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownSettingsStado } from 'src/app/shared/util/multiselect-option/multiselect-option';
import { Cancion } from '../../models/cancion';
import { CancionService } from '../../services/cancion.service';
import { ArtistasService } from 'src/app/private/artistas/services/artistas.service';
import { Artista } from 'src/app/private/artistas/models/artista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canciones-new',
  templateUrl: './canciones-new.component.html',
  styleUrls: ['./canciones-new.component.scss']
})
export class CancionesNewComponent implements OnInit {

  artistas:Artista[]=[];
  cancion:Cancion;
  loading:boolean=false;
  error:boolean=false;
  closeResult = '';
  categoryForm: FormGroup;
  dropdownSettings = {};
  filterProjectInfoDto: any;

  constructor(private fb: FormBuilder, 
    private service:CancionService, 
    private artistasService:ArtistasService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.obtenerArtistas();
    this.filterProjectInfoDto = [];
    this.dropdownSettings = DropdownSettingsStado();
    this.categoryForm = this.fb.group(
      {
        id: '', 
        nombre: '',
        duracion: '',
        reproducciones: '',
        generoMusical: '',
        artista: '',
        album: ''
      }
    );

    this.filterProjectInfoDto.push("Pop");
    this.filterProjectInfoDto.push('Rock');
    this.filterProjectInfoDto.push("Reggae");
    this.filterProjectInfoDto.push("Rap");
  }

  formSubmit(){
    
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
    }else{
      this.cancion = this.categoryForm.value;
      this.callService(this.cancion);
      this.router.navigate(['/maintainer/canciones/list']);
      console.log(this.cancion);
    }
  }

  async obtenerArtistas(){
    this.loading = true;
    this.error=false;
    try {
      let artistasLocal = await this.artistasService.getAlls().toPromise();
      this.artistas = artistasLocal;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error=true;
    }
  }

  async callService( cancion:Cancion){
    this.loading = true;
    this.error = false;
    try{
      let result = await this.service.save(cancion).toPromise();
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

