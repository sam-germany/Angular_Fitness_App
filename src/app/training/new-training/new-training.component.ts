import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exerciese.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
   @Output() trainingStart22 = new EventEmitter<void>();
   exercises22: Exercise [] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercises22 = this.trainingService.getAvailableExercises();
  }

  onStartTraining(f1: NgForm) {
     this.trainingService.startExercise(f1.value.exercise66);
  }
}
