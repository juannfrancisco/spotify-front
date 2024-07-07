import { Component, OnInit } from '@angular/core';
import { CONSTANT } from 'src/app/shared/util/constant/constant';

@Component({
  selector: 'app-sidebar-maintainer',
  templateUrl: './sidebar-maintainer.component.html',
  styleUrls: ['./sidebar-maintainer.component.scss']
})
export class SidebarMaintainerComponent implements OnInit {

  urlPrimary="";
  public isCollapsed = true;

  ngOnInit() {
    this.urlPrimary = CONSTANT.URL_MAIN;
  
  }

}

