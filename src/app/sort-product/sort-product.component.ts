import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-sort-product',
  templateUrl: './sort-product.component.html',
  styleUrls: ['./sort-product.component.css']
})
export class SortProductComponent implements OnInit{
  isVisible:boolean= false;
  isStorage:boolean= false;
  isService:boolean= false;
  isStatus:boolean= false;
  isRush:boolean= false;
  rotateUp: boolean = false;
  isPharma:boolean = false
  isPlano:boolean = false;
  isNping:boolean = false;
  isHide:boolean = false;
 storageValues:string[]=[];
 filteredplano:any[]=[];
 filterNping:any[]=[];
 filteredData:any[]=[]
 itemsByDate: { date: Date, data: any[] }[] = [];
 dataSource: any[] = [];
 storageData:any[]=[];
 perishable:boolean = false;
 isLoading = false;
 constructor(private product:ProductsService ,private http: HttpClient,private el:ElementRef){}
 @Output() public clickedOutside=new EventEmitter()
 
api = "https://func-gs1-ivsm-core-service-dev.azurewebsites.net/api/v1/task/list?code=DfxvMQ63TcQsLrbA0nugj11HN-94lfPdqHS-IO-Ez3ZRAzFuxnlzSA=="
token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODU3NjYzNzEsImlhdCI6MTY4NTMzNDM3MSwic3ViIjoiYmRjMDQzMDEtY2M0NS00NjUxLWJkNTItOGY2ODMwZGEyMThlIiwidXNlcklkIjozNywicm9sZSI6InJlY2VpdmVyIiwidXNlclR5cGUiOiJBZ2VudCIsImZpcnN0TmFtZSI6InJlY2VpdmVyIiwibGFzdE5hbWUiOiJHUzEiLCJ1c2VyUm9sZXMiOlt7ImlkIjo3NiwidXNlcklkIjoiMzciLCJyb2xlIjoicmVjZWl2ZXIiLCJzdGF0aW9uIjoiMSIsInVzZXJUeXBlIjoiQWdlbnQiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA0VDA3OjAyOjE4LjQ2MloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA0VDA3OjAyOjE4LjQ2MloifV19.rIpUGCZfXXHAgWH-Adb4HwUhAnwdb9NNCZnnPjPPZq0";
headers = new HttpHeaders({
  'Content-Type': 'application/json',

  'Authorization': 'Bearer ' + this.token

});
requestBody ={"type":"photographer","limit":10,"skip":1,"recentTasks":false,"perishable": this.perishable,"userId":[],"requestServices":this.dataSource,"storage":this.storageData,"status":[]}


 ngOnInit():void{
    // this.storageValues = [];
    // this.itemsByDate = this.product.getData();
    // this.product.postData()
    this.postData();
  
  }
 handleChange(event:any){
  
  if (event.target.checked) {
    this.dataSource.push(event.target.value);
  } else {
    const index = this.dataSource.indexOf(event.target.value);
    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
  }
this.postData();
console.log('dataSource: ', this.dataSource);

}
handleStorage(event:any){
  
  if (event.target.checked) {
    this.storageData.push(event.target.value);
  } else {
    const index = this.storageData.indexOf(event.target.value);
    if (index > -1) {
      this.storageData.splice(index, 1);
    }
  }
this.postData();
console.log('storageData: ', this.storageData);

}
 
 
  show(){
    this.isVisible=!this.isVisible;
   
    
  }
  storage(){
  this.isStorage=! this.isStorage;
  this.rotateUp = !this.rotateUp;
  
  }
  service(){
    this.isService=! this.isService;
  }
  status(){
    this.isStatus=! this.isStatus;
  }
  rush(){
    this.isRush=! this.isRush;
  }
  getValues(event:any){
    const id = event.target.value;
    const isChecked = event.target.checked;
   
    
    if(isChecked){
     
      this.storageValues.push(id)
      
    }else{
      const index = this.storageValues.indexOf(id);
      if (index > -1) {
        this.storageValues.splice(index, 1);
       
      }
    }
   
  }
  handlePerishable(){
    this.perishable=!this.perishable;
    console.log('perishable: ', this.perishable);
    this.postData();
  }
 
  // stopPropagation(event: MouseEvent) {
  //   event.stopPropagation();
  // }
  toggleDropdown(dropdownNumber: string) {
    if (dropdownNumber === 'storage') {
      this.isStorage = !this.isStorage;
      this.isStatus = false;
      this.isRush =false;
      this.isVisible=false;
      this.isService=false;
    } else if (dropdownNumber === 'service') {
      this.isService = !this.isService;
      this.isStatus = false;
      this.isRush =false;
      this.isVisible=false;
      this.isStorage=false;
    }else if(dropdownNumber === 'status'){
      this.isStatus = !this.isStatus;
      this.isService = false;
      this.isRush =false;
      this.isVisible=false;
      this.isStorage=false;
    }else if(dropdownNumber === 'rush'){
      this.isRush = !this.isRush;
      this.isService = false;
      this.isVisible =false;
      this.isStatus=false;
      this.isStorage=false;
    }
  }
  load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 2000 );
  }
  
  postData() {

    this.http.post<any>(this.api,this.requestBody, { headers: this.headers }).subscribe((response:any) => {
    console.log(response);
    this.filteredData=response;
   
    })
    
  }
 
}
