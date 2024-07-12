import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesNewComponent } from './canciones-new.component';

describe('CancionesNewComponent', () => {
  let component: CancionesNewComponent;
  let fixture: ComponentFixture<CancionesNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancionesNewComponent]
    });
    fixture = TestBed.createComponent(CancionesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
