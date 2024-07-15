import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownSettingsStado } from 'src/app/shared/util/multiselect-option/multiselect-option';

@Component({
  selector: 'app-playlists-new',
  templateUrl: './playlists-new.component.html',
  styleUrls: ['./playlists-new.component.scss']
})
export class PlaylistsNewComponent implements OnInit {

  closeResult = '';
  categoryForm: FormGroup;
  dropdownSettings = {};
  filterProjectInfoDto: any;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.filterProjectInfoDto = [];
    this.dropdownSettings = DropdownSettingsStado();

    this.categoryForm = this.fb.group(
      {
        name: '', 
        typeProveedor: '',
        typeCategory: '',
        typeClient: '',
        stock: '',
        stockCritica: '',
        point: '',
        canje: '',
        decription: '',
        month_date: '',
        day_date: '',
        decriptionMaxima: '',
        stado: '', 
      }
    );

    let info = {
      id:1,
      name:"Nube GCP",
    };
    this.filterProjectInfoDto.push(info);
    info = {
      id:2,
      name:"Nube AMAZON",
    };
    this.filterProjectInfoDto.push(info);
    info = {
      id:3,
      name:"Nube AZURE",
    };
    this.filterProjectInfoDto.push(info);
  }

  formSubmit(){
    
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
    }else{
    
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

