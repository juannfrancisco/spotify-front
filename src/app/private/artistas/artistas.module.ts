import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistasRoutingModule } from './artistas-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ArtistasListComponent } from './pages/artistas-list/artistas-list.component';
@NgModule({
  declarations: [
    ArtistasListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ArtistasRoutingModule,
    DataTablesModule.forRoot(),
  ]
})
export class ArtistasModule { }
