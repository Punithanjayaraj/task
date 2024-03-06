import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getBalancedSubstrings(S: string): string[] {
    const result: string[] = [];
    const uniqueChars = new Set<string>(S);

    for (let i = 0; i < S.length; i++) {
      const char1 = S[i];

      for (let j = i + 1; j < S.length; j++) {
        const char2 = S[j];

        if (char1 !== char2 && uniqueChars.size === 2) {
          const substring = S.substring(i, j + 1);
          if (this.isBalanced(substring)) {
            this.updateResult(result, substring);
          }
        }
      }
    }

    return result;
  }

  private isBalanced(substring: string): boolean {
    const charCountMap = new Map<string, number>();
    const uniqueChars = new Set<string>();

    for (const char of substring) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
      uniqueChars.add(char);
    }

    if (uniqueChars.size !== 2) {
      return false;
    }

    const counts = Array.from(charCountMap.values());
    return counts[0] === counts[1];
  }

  private updateResult(result: string[], substring: string): void {
    if (substring.length > 0) {
      if (result.length === 0 || substring.length > result[0].length) {
        result.length = 0; // Clear previous entries
        result.push(substring);
      } else if (substring.length === result[0].length) {
        result.push(substring);
      }
    }
  }
}
