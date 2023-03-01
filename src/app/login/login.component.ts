import { HttpClient } from '@angular/common/http';
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
  account: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.account = 'Malu Carvalho';
  }

  clearInput() {
    this.account = '';
  }

  onSubmit() {
    const loginData = {account: this.account};
    this.http.post('api/v1/login', loginData).subscribe(
      response => console.log('Sucess!', response),
      error => console.error('Error!', error)
    );
  }
}
