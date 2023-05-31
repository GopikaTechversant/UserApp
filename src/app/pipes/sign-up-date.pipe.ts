import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signUpDate'
})
export class SignUpDatePipe implements PipeTransform {
  transform(signupTime: string): any {
    const dateStr = new Date(signupTime).toISOString();
    console.log("signup time",signupTime);
    console.log("dateStr",dateStr);
    
    const difference = Date.now() - new Date(dateStr).getTime();
    console.log("difference",difference);
    
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return 'just now';
    }
  }
}

