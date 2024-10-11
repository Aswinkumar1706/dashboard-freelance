import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm! : FormGroup;
showpassword:boolean = false;
  constructor(private router: Router,private fb : FormBuilder,private authService : AuthService) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/main/dashboard']);
    }
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
       username:['',Validators.required],
       password:['',Validators.required]
    })
  }
 
  login(){
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert("Please enter valid credentials")
        return;
    }
   this.authService.login().subscribe((res:any) =>{
        var userData = res['users'];
        var index = userData.findIndex((x: { username: any; password: any; }) => x.username == this.loginForm.controls['username'].value && x.password == this.loginForm.controls['password'].value);

        if(index > -1 ){
            var currentUser = userData[index];
            localStorage.setItem('currentUser',JSON.stringify(currentUser));
      
            this.authService.setUser(res.users[1]);
            preventBack();
            window.onunload = function () { null };  
            this.router.navigateByUrl('main/dashboard');
        }else{
          alert("User Not Exist")
        }
   })

    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  clear(){
      this.loginForm.reset();
  }
}
function preventBack() { window.history.forward(); }  
