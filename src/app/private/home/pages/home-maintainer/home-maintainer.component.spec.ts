import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaintainerComponent } from './home-maintainer.component';

describe('HomeMaintainerComponent', () => {
  let component: HomeMaintainerComponent;
  let fixture: ComponentFixture<HomeMaintainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMaintainerComponent]
    });
    fixture = TestBed.createComponent(HomeMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
