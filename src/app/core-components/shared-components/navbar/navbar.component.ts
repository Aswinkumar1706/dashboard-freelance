import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
 userData:any;
  constructor(private authService : AuthService, private _router: Router) { }

  ngOnInit(): void {
       this.userData = JSON.parse(localStorage.getItem("currentUser")!);
  }
  logOut() {
    this.authService.logout();
    //this._router.navigate(['/login']);
    this._router.navigate(['/login']).then(() => {
      // Clear browser history by replacing the state
      console.log('wwwwp')
      //window.history.replaceState({}, document.title, window.location.origin + '/login');
      window.location.replace(window.location.origin + '/login')
    });
  }
}
