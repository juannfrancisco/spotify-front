import { Component } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home-maintainer',
  templateUrl: './home-maintainer.component.html',
  styleUrls: ['./home-maintainer.component.scss'],
})
export class HomeMaintainerComponent {
  constructor(private appService: AppService) {}

  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled,
    };
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
}
