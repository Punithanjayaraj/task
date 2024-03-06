import { Component } from '@angular/core';
import { FibonacciService } from '../service/fibonacci.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  title = 'fibonacci-value';
  position?: number;
  fibonacciValue?: number;

  constructor(private fibonacciService: FibonacciService) {}

  calculate(): void {
    if (this.position !== undefined && this.position >= 0) {
      this.fibonacciValue = this.fibonacciService.calculateFibonacci(
        this.position
      );
    } else {
     
    }
  }
}
