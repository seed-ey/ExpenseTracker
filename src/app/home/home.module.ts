import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    BodyComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
