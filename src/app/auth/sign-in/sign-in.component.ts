import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  loading: boolean = false; 
  constructor(
    public authService: AuthService
    ) 
    { }
ngOnInit(): void {
  
}
login(){
  this.loading = true;
}
backgroundImageStyle = {
  'background-image': 'url("/assets/images/background1.jpeg")',
  'background-size': 'cover',
  'background-position': 'center',
  'align-items': 'center'
};
}
