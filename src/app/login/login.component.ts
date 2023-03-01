import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faBars, faBell, faSortDown, } from '@fortawesome/free-solid-svg-icons';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

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

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) {}

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
      error => this.dialog.open(ErrorDialogComponent)
    );
  }
}
