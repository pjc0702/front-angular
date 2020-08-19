import { Component } from '@angular/core';

import { ApiTestService} from '../services/api-test.service';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'font-angular';

  constructor(private apiTestService: ApiTestService) {}

  createUser(){

    const user = new User;

    user.firstName = 'Patricio';
    user.lastName = 'Castillo';

    this.apiTestService.createUser(user).subscribe((res) => {
      console.log('usuario creado correctamente');
    });
  }
}
