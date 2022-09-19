import {Injectable} from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  private myToken!: string;

  login() {
    this.myToken = 'fakeToken';
  }

  getToken(): string {
    return this.myToken;
  }
}
