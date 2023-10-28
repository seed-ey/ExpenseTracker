import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  

  selectedItem: any = null;

  selectItem(item: any) {
    this.selectedItem = item;
    localStorage.setItem('selectedItem', JSON.stringify(item));
        this.renderer.addClass(this.el.nativeElement.querySelector(`.${item.icon}`), 'active');
  }
  ngOnInit() {
    const storedSelectedItem = localStorage.getItem('selectedItem');
    if (storedSelectedItem) {
      this.selectedItem = JSON.parse(storedSelectedItem);
    }
  }
}
