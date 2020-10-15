import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Exercise} from '../exerciese.model';
import {TrainingService} from '../training.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  displayedColumns22 = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource22 = new MatTableDataSource<Exercise>();

   @ViewChild(MatSort) sort22: MatSort;
   @ViewChild(MatPaginator) paginator22: MatPaginator;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.dataSource22.data = this.trainingService.getCompletedOrCancelledExercises();
  }

  ngAfterViewInit() {
   this.dataSource22.sort = this.sort22;
   this.dataSource22.paginator = this.paginator22;
  }

  doFilter22(fValue: string) {
    this.dataSource22.filter = fValue.trim().toLowerCase()
}

}
