import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';


const {apiUsers} = environment
const {apiKey} = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

   public login(username: string): Observable<User>{
    return this.checkUsername(username)
    .pipe(
      switchMap((user: User | undefined) => {
        if(user === undefined){ // user does not exist
          return this.createUser(username)
        }
        return of(user)
      })
    )
   }


  //Login

  // check if user exists
  private checkUsername(username: string): Observable<User | undefined>{
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
    .pipe(
      map((response: User[]) => response.pop())
    )
  }

  // if not user, create user
  private createUser(username: string): Observable<User>{

    const user = {
      username,
      favorites: []
    };
    //user

    //headers  _> api key
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(apiUsers, user, {
      headers
    })

    // POST request
  }

  // if user, store user

}
