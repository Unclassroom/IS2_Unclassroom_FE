import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/profile');
  }

  getById(id: number) {
      return this.http.get('/profile' + id);
  }

  create(user: User) {
      return this.http.post('/profile', user);
  }

  update(user: User) {
      return this.http.put('/profile' + user.id, user);
  }

  delete(id: number) {
      return this.http.delete('/profile' + id);
  }

}
