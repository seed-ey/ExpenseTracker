import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loading: boolean = false; 
  constructor(
    public authService: AuthService
    ) 
    { }
ngOnInit(): void {
  
}
signUp(){
  this.loading = true;
}
// backgroundImageStyle = {
//   'background-image': 'url("/assets/images/background1.jpeg")',
//   'background-size': 'cover',
//   'background-position': 'center',
//   'align-items': 'center'
// };
}
