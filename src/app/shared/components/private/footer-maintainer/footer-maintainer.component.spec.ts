import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMaintainerComponent } from './footer-maintainer.component';

describe('FooterMaintainerComponent', () => {
  let component: FooterMaintainerComponent;
  let fixture: ComponentFixture<FooterMaintainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterMaintainerComponent]
    });
    fixture = TestBed.createComponent(FooterMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
