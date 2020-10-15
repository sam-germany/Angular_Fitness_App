import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {TrainingService} from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  ongoingTraining22 = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exerciseSubscription =
      this.trainingService.exerciseChanged22.subscribe( exercise44 => {

        if (exercise44) {
          this.ongoingTraining22 = true;
        } else {
          this.ongoingTraining22 = false;
        }
      });
  }

}
