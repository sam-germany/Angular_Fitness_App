import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StopTrainingComponent} from './stop-training.component';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress22 = 0;
  timer22: number;

  constructor(private dialog22: MatDialog,
              private trainingService: TrainingService) { }

  ngOnInit(): void {
        this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step33 = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer22 = setInterval(() => {
      this.progress22 = this.progress22 + 1;
      if(this.progress22 >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer22);
      }
    },step33);
  }

  onStop() {
    clearInterval(this.timer22);
   const dialogRef22 =  this.dialog22.open(StopTrainingComponent, {
      data: {
        progress33: this.progress22
      }
    });

   dialogRef22.afterClosed().subscribe(result => {

     if (result) {
       this.trainingService.cancelExercise(this.progress22)
     } else {
       this.startOrResumeTimer();
     }
   });


  }
}
