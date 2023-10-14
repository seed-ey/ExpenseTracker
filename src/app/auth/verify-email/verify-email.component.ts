import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit{
  email = "godseedchukwuemeka@gmail.com";
  loading: boolean= false
  ngOnInit(): void {
    
  }
  resendEmail(){
    this.loading = true
  }
}
