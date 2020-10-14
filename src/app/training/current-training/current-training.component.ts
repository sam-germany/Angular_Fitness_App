import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StopTrainingComponent} from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress22 = 0;
  timer22: number;

  constructor(private dialog22: MatDialog) { }

  ngOnInit(): void {
    this.timer22 = setInterval(() => {
      this.progress22 = this.progress22 + 5;
      if(this.progress22 >= 100) {
        clearInterval(this.timer22);
      }
    },1000);
  }

  onStop() {
    clearInterval(this.timer22);
   const dialogRef22 =  this.dialog22.open(StopTrainingComponent, {
      data: {
        progress33: this.progress22
      }
    });

   dialogRef22.afterClosed().subscribe(result => {
     console.log(result);
   });


  }
}
