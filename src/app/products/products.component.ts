import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  data:any[]=[];
  productCounts :any={};
  itemsByDate: { date: Date, data: any[] }[] = [];
  constructor(private product:ProductsService){}
  // ngOnInit(): void {
  //     this.product.postData();
  // }
  


  
  ngOnInit(): void {
    this.product.postData();
    this.itemsByDate = this.product.getData();
    
    
    
    
    
  }
}
