import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { UserData } from '../auth';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  loading: boolean = false; 
  constructor(
    public authService: AuthService,
    private router: Router,
    ) 
    { }
    userd: UserData = new UserData();
    email:string = '';
    password: string = '';
    findAll(){
      this.authService.findAll().subscribe((data)=>{
        console.log("llllllllllllllllll",data);
      })
    }
    ngOnInit(): void {
      this.findAll();
    }
  
    login() {
      this.authService.login(this.userd.email, this.userd.password).subscribe(response => {
        console.log("2222222222",this.userd);
        this.loading = true;
        this.router.navigate(['/home']);
  
      });
    }
  

backgroundImageStyle = {
  'background-image': 'url("/assets/images/background1.jpeg")',
  'background-size': 'cover',
  'background-position': 'center',
  'align-items': 'center'
};
}
