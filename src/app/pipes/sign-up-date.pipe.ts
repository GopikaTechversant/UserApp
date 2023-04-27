import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signUpDate'
})
export class SignUpDatePipe implements PipeTransform {

  transform(signupTime:string): any {
    
    const difference = Date.now() - new Date(signupTime).getTime();
    console.log("difference",difference);
    console.log("date now",Date.now());
    
    const seconds = Math.floor(difference/1000);
    console.log("seconds",seconds);
    
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);

   if(days > 0){
    return `${days} days ago`;
   }else if(hours > 0){
    return `${hours} hours ago`;
   }else if(minutes > 0){
    return `${minutes} minutes ago`;
   }else{
    return "just now";
   }
 
  }

}
