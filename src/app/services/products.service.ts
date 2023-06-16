import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
interface ApiResponse {
  [key: string]: any[];
}

interface Product {
  id: number;
  uuid: string;
  name: string;
  GTIN1: string;
  GTIN2: string;
  serviceRequestNumber: string;
  scheduledDate: string;
  revivedDate: string;
  subscriberId: string;
  preRegistration: string;
  email: string;
  companyName: string;
  samples: string;
  status: string;
  returnDate: string;
  expiryDate: string;
  note: string;
  sequenceId: string;
  psrId: number;
  releaseType: string;
  srnId: string;
  serviceType: string;
  storage: string;
  perishable: boolean;
  gln: string;
  itemGtin: string;
  itemGtinReceived: string;
  rushService: boolean;
  noOfSamples: string;
  size: string;
  uom: string;
  totalUnits: string;
  unitsPerCase: string;
  imageStartDate: string;
  imageEndDate: string;
  productTypeName: string;
  vendorPackagingCode: string;
  nutritionVersionCode: string;
  planoTray: string;
  retailReadyPack: string;
  bundleRetail: string;
  bundleEcom: string;
  bundleFoodService: string;
  prefixType: string;
  createdAt: string;
  updatedAt: string;
  receivedProducts: number;
  totalProducts: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  allData: any[] = [];
  currentGroup:any[]=[];
  
  constructor(public http: HttpClient) {
  }
  apiUrl = "https://func-gs1-ivsm-core-service-dev.azurewebsites.net/api/v1/service/product/received/all-srn?code=DfxvMQ63TcQsLrbA0nugj11HN-94lfPdqHS-IO-Ez3ZRAzFuxnlzSA==";
//  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODQ2NjY2NzMsImlhdCI6MTY4NDIzNDY3Mywic3ViIjoiYzkyZjNkODQtY2Q3OC00MmMwLWE3YmQtOTEyZDE5OGJiYjkxIiwidXNlcklkIjo0OSwicm9sZSI6ImFkbWluIiwidXNlclR5cGUiOiJBZ2VudCIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJHUzEiLCJ1c2VyUm9sZXMiOlt7ImlkIjo4OCwidXNlcklkIjoiNDkiLCJyb2xlIjoiYWRtaW4iLCJzdGF0aW9uIjpudWxsLCJ1c2VyVHlwZSI6IkFnZW50IiwiY3JlYXRlZEF0IjoiMjAyMy0wNS0wNFQwNzoyMToyNC45MDVaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0wNFQwNzoyMToyNC45MDVaIn1dfQ.-AuqAm28OnWuz2LLIAdjtQhTkuBKcvhDbjI6MTMT6aw";
token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODYzNzIzMzMsImlhdCI6MTY4NTk0MDMzMywic3ViIjoiYmRjMDQzMDEtY2M0NS00NjUxLWJkNTItOGY2ODMwZGEyMThlIiwidXNlcklkIjozNywicm9sZSI6InJlY2VpdmVyIiwidXNlclR5cGUiOiJBZ2VudCIsImZpcnN0TmFtZSI6InJlY2VpdmVyIiwibGFzdE5hbWUiOiJHUzEiLCJ1c2VyUm9sZXMiOlt7ImlkIjo3NiwidXNlcklkIjoiMzciLCJyb2xlIjoicmVjZWl2ZXIiLCJzdGF0aW9uIjoiMSIsInVzZXJUeXBlIjoiQWdlbnQiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA0VDA3OjAyOjE4LjQ2MloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA0VDA3OjAyOjE4LjQ2MloifV19.wxg_itH-ors44LAzLe5FJ_gWWc3RNdlR3kKz-NwkIKU";
headers = new HttpHeaders({
    'Content-Type': 'application/json',

    'Authorization': 'Bearer ' + this.token

  });

  requestBody = {
    "searchKey": "",
    "companyName": "",
    "date": "",
    "searchValue": "",
    "preRegistration": "",
    "requestServices": []
  }
  itemsByDate: { date: Date, data: any[] }[] = [];
  getData() {
    return this.itemsByDate;
  }
  postData() {

    this.http.post<ApiResponse>(this.apiUrl, this.requestBody, { headers: this.headers }).subscribe((response:any) => {
    console.log(response);
    
     
      for (let key in response?.res){
   
    const objectsArray = response.res[key];
   for (let i = 0; i < objectsArray.length; i++) {
      const currentObject = objectsArray[i];
      const createdDate = new Date(currentObject.createdAt);
      const formattedDate = new Date(createdDate.getFullYear(), createdDate.getMonth(), createdDate.getDate());

      let existingItem = this.itemsByDate.find((item) => item.date.getTime() === formattedDate.getTime());
      // console.log('existingItem: ', existingItem);
      if (existingItem) {
        existingItem.data.push(currentObject);
      } else {
        existingItem = { date: formattedDate, data: [currentObject] };
        this.itemsByDate.push(existingItem);
      }
    }
    
  }
   
    this.itemsByDate.sort((a, b) => b.date.getTime() - a.date.getTime());
    // console.log("Items grouped by createdAt date:", this.itemsByDate);
})

}
}
