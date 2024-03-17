import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Injectable({providedIn: 'root'})

  private ApiUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  async login(email: string, password: string): Promise<any> {
    const observable = this.http.post(`${this.ApiUrl}/login`, {
      email,
      password
    });
    return await lastValueFrom(observable);
  }
}
