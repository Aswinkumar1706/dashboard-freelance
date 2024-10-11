import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".toggle-icon").click(function() {
      $(".wrapper").hasClass("toggled") ? ($(".wrapper").removeClass("toggled"), $(".sidebar-wrapper").unbind("hover")) : ($(".wrapper").addClass("toggled"), $(".sidebar-wrapper").hover(function() {
        $(".wrapper").addClass("sidebar-hovered")
      }, function() {
        $(".wrapper").removeClass("sidebar-hovered")
      }))
    })
  }

}
