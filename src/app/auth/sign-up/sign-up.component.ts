import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loading: boolean = false; 
  userd: UserData = new UserData();
  constructor(
    public authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) 
    { }
ngOnInit(): void {
  
}

signUp() {
  this.authService.postData(this.userd).subscribe((response) => {
    debugger
    console.log('Signup successful!', response);
    this.loading = true;
    this.router.navigate(['/sign-in']);
  },
  (error) => {
   // console.error('Error during signup:', error);
  }

  );
}

}
