import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsDetailsComponent } from './playlists-details.component';

describe('PlaylistsDetailsComponent', () => {
  let component: PlaylistsDetailsComponent;
  let fixture: ComponentFixture<PlaylistsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistsDetailsComponent]
    });
    fixture = TestBed.createComponent(PlaylistsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
