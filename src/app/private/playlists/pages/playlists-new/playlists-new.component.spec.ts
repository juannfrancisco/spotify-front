import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsNewComponent } from './playlists-new.component';

describe('PlaylistsNewComponent', () => {
  let component: PlaylistsNewComponent;
  let fixture: ComponentFixture<PlaylistsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistsNewComponent]
    });
    fixture = TestBed.createComponent(PlaylistsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
