import { Component, OnInit } from '@angular/core';
import { faBars, faBell, faSortDown, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  faBar = faBars;
  faBell = faBell;
  faSortDown = faSortDown;
  email: string = '';
  password: string = '';

  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.email = 'Malu Carvalho';
  }

  clearInput() {
    this.email = '';
  }

  onSubmit() {
    console.log(this.email);
  }
}
