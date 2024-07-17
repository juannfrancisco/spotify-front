import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesTableComponent } from './canciones-table.component';

describe('CancionesTableComponent', () => {
  let component: CancionesTableComponent;
  let fixture: ComponentFixture<CancionesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancionesTableComponent]
    });
    fixture = TestBed.createComponent(CancionesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
