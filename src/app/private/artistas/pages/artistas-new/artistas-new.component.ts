import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownSettingsStado } from 'src/app/shared/util/multiselect-option/multiselect-option';
import { Artista } from '../../models/artista';
import { ArtistasService } from '../../services/artistas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistas-new',
  templateUrl: './artistas-new.component.html',
  styleUrls: ['./artistas-new.component.scss']
})
export class ArtistasNewComponent implements OnInit {

  artista:Artista;
  loading:boolean=false;
  error:boolean=false;
  closeResult = '';
  categoryForm: FormGroup;
  dropdownSettings = {};
  filterProjectInfoDto: any;

  constructor(private fb: FormBuilder,
    private service: ArtistasService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this.filterProjectInfoDto = [];
    this.dropdownSettings = DropdownSettingsStado();
    this.categoryForm = this.fb.group(
      {
        id: '', 
        nombre: '',
        biografia: '',
        pais: '',
        generoMusical: '',
        oyentesMensuales: '',
        tipo: '',
        verificado: ''
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
        this.categoryForm.value;
    }else{
      this.artista = this.categoryForm.value;
      this.callService(this.artista);
      this.router.navigate(['/maintainer/artistas/list']);
      console.log(this.artista);
    }
    
  }

  async callService( artista:Artista){
    this.loading = true;
    this.error = false;
    try{
      let result = await this.service.save(artista).toPromise();
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

