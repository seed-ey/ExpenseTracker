import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  loading: boolean = false; 
  constructor(
    public authService: AuthService
    ) 
    { }
ngOnInit(): void {
  
}
reset(){
  this.loading = true;
}
// backgroundImageStyle = {
//   'background-image': 'url("/assets/images/forgot-password.jpg")',
//   'background-size': 'cover',
//   'background-position': 'center',
//   'align-items': 'center'
// };
}
