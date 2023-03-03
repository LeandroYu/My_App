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
export class LoginComponent implements OnInit {
  faBar = faBars;
  faBell = faBell;
  faSortDown = faSortDown;
  account: string = '';
  agencia: string = '';
  conta: string = '';

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.account = 'Malu Carvalho';
    this.agencia = '1234';
    this.conta = '12345-6';
  }

  clearInput() {
    this.account = '';
    this.agencia = '';
    this.conta = '';
  }

  onSubmit() {
    const loginData = { account: this.account, agencia: this.agencia, conta: this.conta };
    this.http.post('api/v1/login', loginData).subscribe(
      response => this.router.navigate(['/cadastro']),
      error => this.dialog.open(ErrorDialogComponent)
    );
  }
}
