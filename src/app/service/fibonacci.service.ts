import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private memoizationCache: { [key: number]: number } = {};

  calculateFibonacci(position: number): number {
    if (position <= 1) {
      return position;
    }

    if (!this.memoizationCache[position]) {
      this.memoizationCache[position] =
        this.calculateFibonacci(position - 1) +
        this.calculateFibonacci(position - 2);
    }

    return this.memoizationCache[position];
  }
}
