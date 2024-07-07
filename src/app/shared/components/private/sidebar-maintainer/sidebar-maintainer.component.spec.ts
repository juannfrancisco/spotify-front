import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMaintainerComponent } from './sidebar-maintainer.component';

describe('SidebarMaintainerComponent', () => {
  let component: SidebarMaintainerComponent;
  let fixture: ComponentFixture<SidebarMaintainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarMaintainerComponent]
    });
    fixture = TestBed.createComponent(SidebarMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
