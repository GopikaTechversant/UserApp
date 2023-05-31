import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signupTime'
})
export class SignupTimePipe implements PipeTransform {

  transform(value: Date): string {
    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };

    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    console.log("seco",seconds);
    
    if (seconds < 30) {
      return 'just now';
    }

    let counter;

    for (const interval in intervals) {
      if (intervals.hasOwnProperty(interval)) {
        counter = Math.floor(seconds / intervals[interval]);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + interval + ' ago';
          } else {
            return counter + ' ' + interval + 's ago';
          }
        }
      }
    }

    return value.toLocaleDateString(); // return the signup time as a string in case none of the intervals match
  }

}
