import { Component } from '@angular/core';
import { Authservice } from 'src/app/core/services/auth.service';

@Component({
  selector: 'sm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public auth: Authservice) {}
}
