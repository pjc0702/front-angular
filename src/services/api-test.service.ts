import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  urlApi: string = 'https://cdbgsbdes.pronaca.com/api';
  //urlApi: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  /**
   * createUser
   */
  public createUser(user: User) {
    return this.httpClient.post(`${this.urlApi}/createUser/`, user);
  }
}

