import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public
  public currentUser: Observable<any>;

  //private
  private currentUserSubject: BehaviorSubject<any>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    
  }

  // getter: currentUserValue
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // /**
  //  *  Confirms if user is admin
  //  */
  // get isAdmin() {
  //   return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  // }

  // /**
  //  *  Confirms if user is client
  //  */
  // get isClient() {
  //   return this.currentUser && this.currentUserSubject.value.role === Role.Client;
  // }
  public  setUser(data:any){
    this.currentUserSubject.next(data);
  }
  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login() {
      return this._http.get('./assets/fakeDb/user.json');
    // return this._http
    //   .post<any>(`${environment.apiUrl}/users/authenticate`, { email, password })
    //   .pipe(
    //     map(user => {
    //       // login successful if there's a jwt token in the response
    //       if (user && user.token) {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('currentUser', JSON.stringify(user));

    //         // Display welcome toast!
    //         setTimeout(() => {
    //           this._toastrService.success(
    //             'You have successfully logged in as an ' +
    //               user.role +
    //               ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
    //             '👋 Welcome, ' + user.firstName + '!',
    //             { toastClass: 'toast ngx-toastr', closeButton: true }
    //           );
    //         }, 2500);

    //         // notify
    //         this.currentUserSubject.next(user);
    //       }

    //       return user;
    //     })
    //   );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }
}
