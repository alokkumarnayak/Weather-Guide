import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})
export class PopupWindowComponent  {

  confirmationString: string = '';
  selectedAlign: 'start' | 'center' | 'end' = 'center';
  constructor(
    private readonly dialogRef: MatDialogRef<PopupWindowComponent>
  ) {}

  cancelClick() {
    this.dialogRef.close();
  }

  okClick(event: boolean) {
    this.dialogRef.close(event);
  }

}
