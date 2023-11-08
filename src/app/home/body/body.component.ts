import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Income } from '../home/home';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  public modalForm!: FormGroup;
  income: Income = new Income();

  bsModalRef!: BsModalRef;

  constructor(
    public authService: AuthService,
    private modalService: BsModalService
  ) // private dialog: MatDialog

  {}
  ngOnInit(): void {}
  postIncome() {
    this.authService.PostExpenses(this.income).subscribe(
      (response) => {
        console.log('Expenses fetched successfully!', response);
      },
      (error) => {
        console.error('Error during fetching Expense:', error);
      }
    );
  }
  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

  closeModal() {
    this.bsModalRef.hide();
  }
  saveIncome() {
    this.closeModal();
  }
}
