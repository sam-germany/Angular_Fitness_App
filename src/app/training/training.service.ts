import {Exercise} from './exerciese.model';
import {Subject} from 'rxjs';


export class TrainingService {
  private  availableExercises: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 8} ,
    {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15} ,
    {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18} ,
    {id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
  ];

  private runningExercise22: Exercise;
  exerciseChanged22 = new Subject<Exercise>();
  private exercises77: Exercise [] = [];

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise22 =
          this.availableExercises.find( x => x.id === selectedId);
    this.exerciseChanged22.next({...this.runningExercise22});
  }

  completeExercise() {
    this.exercises77.push({ ...this.runningExercise22,
                              date: new Date(),
                             state: 'completed'});

    this.runningExercise22 = null;
    this.exerciseChanged22.next(null);
  }

  cancelExercise(progress22: number) {
    this.exercises77.push({ ...this.runningExercise22,
                           date: new Date(),
                           state: 'cancelled',
                           duration: this.runningExercise22.duration * (progress22 / 100),
                           calories: this.runningExercise22.calories * (progress22 / 100)
                           });

    this.runningExercise22 = null;
    this.exerciseChanged22.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExercise22};
  }

  getCompletedOrCancelledExercises() {
    return this.exercises77.slice();
  }
}
