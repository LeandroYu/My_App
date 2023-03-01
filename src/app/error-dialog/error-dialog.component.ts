import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public errorMessage: string, private dialogRef: MatDialogRef<ErrorDialogComponent>, private router: Router) { }

  onCadastrarClick(): void {
    this.dialogRef.close(this.router.navigate(['/cadastro']));
  }
  onFecharClick(): void {
    this.dialogRef.close('fechar');
  }
}
