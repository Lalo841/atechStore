import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface ResponseType {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    let config = {
      email: username,
      password: password,
    };

    return this.http
      .post<ResponseType>('http://localhost:7000/api/user/login', config)
      .pipe(
        tap((response) => {
          if (response) {
            localStorage.setItem('token', response.token);
            this.isAuthenticated$.next(true);
          }
        })
      );
  }

  register(username: string, password: string): Observable<any> {
    return this.http
      .post<ResponseType>('http://localhost:7000/api/user/registration', {
        email: username,
        password: password,
      })
      .pipe(
        tap((response) => {
          if (response) {
            localStorage.setItem('token', response.token);
            this.isAuthenticated$.next(true);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuthenticated$.next(false);
  }

  checkAuth(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }
}
