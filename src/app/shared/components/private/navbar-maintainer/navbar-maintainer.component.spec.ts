import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMaintainerComponent } from './navbar-maintainer.component';

describe('NavbarMaintainerComponent', () => {
  let component: NavbarMaintainerComponent;
  let fixture: ComponentFixture<NavbarMaintainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMaintainerComponent]
    });
    fixture = TestBed.createComponent(NavbarMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
