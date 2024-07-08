import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasNewComponent } from './artistas-new.component';

describe('ArtistasNewComponent', () => {
  let component: ArtistasNewComponent;
  let fixture: ComponentFixture<ArtistasNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistasNewComponent]
    });
    fixture = TestBed.createComponent(ArtistasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
