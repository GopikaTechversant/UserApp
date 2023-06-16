import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import Cropper from 'cropperjs';

interface CroppedImage {
  
  area: Cropper.Data;
  top: string;
  left: string;
  width: string;
  height: string;
}

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements AfterViewInit {

  croppedImage: any;
  croppedImages: CroppedImage[] = [];
  cropper!: Cropper;
  cropData: Cropper.Data = {} as Cropper.Data;
 
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  

  ngAfterViewInit(): void {
    const storedData = localStorage.getItem('croppedImages');
    if (storedData) {
      this.croppedImages = JSON.parse(storedData);
      this.createDivsFromStoredData();
    }
    const element = this.ele.nativeElement.querySelector('#image');
    const cropper = new Cropper(element, {
      aspectRatio: 16 / 9,
      crop: (event: Cropper.CropEvent) => {
        // console.log(event)
        this.cropData = event.detail;
       
       

        
        if(this.checkOverlap(event.detail)){
          console.log("overlap detected");
          return 
        }
        
        const croppedCanvas = cropper.getCroppedCanvas();
        const croppedImage = croppedCanvas.toDataURL('image/webp');
       
        
        
      },
    });

    this.cropper = cropper;
   
  }
  
  
  checkOverlap(newArea:any):boolean{
    for(const croppedImage of this.croppedImages){
      const existingArea = croppedImage.area;
      console.log('existingArea: ', existingArea);
      if(this.isOverlapping(existingArea,newArea)){

      }

    }
    return true;
  }
 

isOverlapping(area1:Cropper.Data,area2:Cropper.Data){
  return (
    area1.x < area2.x + area2.width &&
    area1.x + area1.width > area2.x &&
    area1.y < area2.y + area2.height &&
    area1.y + area1.height >area2.y

  );
  
}

  // checkOverlapWithExistingAreas(newArea: Cropper.Data): boolean {
  //   for (const croppedImage of this.croppedImages) {
  //     const existingArea = croppedImage.area;
  //     if (this.isOverlapping(existingArea, newArea)) {
  //       return true; 
  //     }
  //   }
  //   return false; 
  // }

  // isOverlapping(area1: Cropper.Data, area2: Cropper.Data): boolean {
  //   return (
  //     area1.x < area2.x + area2.width &&
  //     area1.x + area1.width > area2.x &&
  //     area1.y < area2.y + area2.height &&
  //     area1.y + area1.height > area2.y
  //   );
  // }

  cropImage() {
    const container = document.getElementById('container');
    const top = container?.offsetTop;
    const left = container?.offsetLeft;
    const marginLeft = container?.style.marginLeft;
    const marginTop = container?.style.marginTop;
    
    const div = document.createElement('div');
   const divTop = div.getBoundingClientRect().top;
   const divLeft = div.getBoundingClientRect().left;
   
    div.id = 'content';
    // localStorage.setItem('id',div);
    
    div.style.position = 'absolute';
  
   
    div.style.left = `${this.cropData.y/2}px`;
    div.style.top = `${this.cropData.x/2}px`;
    
    div.style.width = `${this.cropData.width/2}px`;
    div.style.height = `${this.cropData.height/2}px`;
   

    
   
      document.body.appendChild(div);
       div.style.backgroundColor = 'gray';
       
     
     
  
      
      const newObject: CroppedImage = {
        
        area: this.cropData,
        top: div.style.top,
        left: div.style.left,
        width: div.style.width,
        height: div.style.height
      };
      this.croppedImages.push(newObject);
  
      // Store the updated array in local storage
      localStorage.setItem('croppedImages', JSON.stringify(this.croppedImages));
      // this.createDivFromObject(newObject);
      
  
      
  }
  createDivsFromStoredData() {
    this.croppedImages.forEach((obj: CroppedImage) => {
      console.log('CroppedImage: ', obj);
      this.createDivFromObject(obj);
     
    });
  }

  createDivFromObject(obj: CroppedImage) {
    
  
    const newDiv = document.createElement('div');
    // newDiv.style.left = divLeft + 'px';
    // newDiv.style.top = divTop + 'px';
    // const divRect = newDiv.getBoundingClientRect();

    // const top = divRect.top;
    // const left = divRect.left;
    // const right = divRect.right;
    // const bottom = divRect.bottom;
    newDiv.style.position = 'absolute';
    

    newDiv.style.top = obj.top;
    newDiv.style.left = obj.left;
    newDiv.style.width = obj.width;
    newDiv.style.height = obj.height;
    newDiv.style.backgroundColor = 'gray';
    document.body.appendChild(newDiv);
  }
 
}

