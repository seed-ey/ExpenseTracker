import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
  ],
  exports: [
    DividerModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
  ]
})
export class PrimengModule { }
