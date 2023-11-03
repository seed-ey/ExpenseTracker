import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  activeButton: string | null = null;

  ngOnInit() {
    this.activeButton = 'button1';
  }
  setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }
  
  
}
