import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  
  items = [
    { icon: 'grid_view', text: 'Dashboards', special: true },
    { icon: 'Settings', text: 'Settings', special: false },
    { icon: 'person', text: 'Workflow', special: false },
    { icon: 'inventory', text: 'Products', special: false },
    { icon: 'mail', text: 'Messages', special: false },
    { icon: 'report', text: 'Report', special: false },
    { icon: 'insights', text: 'Analytics', special: false }
  ];

  selectedItem: any = null;

  selectItem(item: any) {
    this.selectedItem = item;
    localStorage.setItem('selectedItem', JSON.stringify(item));
    this.items.forEach((i) => {
      this.renderer.removeClass(this.el.nativeElement.querySelector(`.${i.icon}`), 'active');
    });
  
    // Add "active" class to the selected item
    this.renderer.addClass(this.el.nativeElement.querySelector(`.${item.icon}`), 'active');
  }
  ngOnInit() {
    const storedSelectedItem = localStorage.getItem('selectedItem');
    if (storedSelectedItem) {
      this.selectedItem = JSON.parse(storedSelectedItem);
    }
  }
}
