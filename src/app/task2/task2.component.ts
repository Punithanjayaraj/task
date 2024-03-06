import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  inputString: string = '';
  result: string[] = [];
  constructor(private balancedSubstringService: DataService) {}
findBalancedSubstrings() {
  this.result = this.balancedSubstringService.getBalancedSubstrings(this.inputString);
}
}
