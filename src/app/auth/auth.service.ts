import {User} from './user.modal';
import {AuthData} from './auth-data.modal';
import {Subject} from 'rxjs';

export class AuthService {
     authChange22 = new Subject<boolean>();
     private user: User;

     registerUser(authData: AuthData) {
       this.user = {
         email: authData.email,
         userId: Math.round(Math.random() * 10000).toString()
       };

       this.authChange22.next(true);
     }

     login(authData: AuthData) {
       this.user = {
         email: authData.email,
         userId: Math.round(Math.random() * 10000).toString()
       };
       this.authChange22.next(true);
     }

     logout() {
       this.user = null;
       this.authChange22.next(false);
     }

     getuser() {
       return { ...this.user};
     }


     isAuth() {
       return this.user != null;
     }

}
