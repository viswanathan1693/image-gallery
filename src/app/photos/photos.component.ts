import { ImageObject } from './../_models/ImageObject';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  imgArray: Array<Partial<ImageObject>> = [];
  page = 1;
  pageSize = 8;
  collectionSize = 0;


  constructor(@Inject(DOCUMENT) private document: Document, private imgService: ImageService) { }

  ngOnInit(): void {
    this.constructImgObject();
    setTimeout(() =>{ this.document.body.classList.add('loaded');},500);
  }

  constructImgObject(){
    this.imgArray = this.imgService.getpaginatedImageObjects(this.page, this.pageSize);
    this.collectionSize = this.imgService.getImageObjects().length;
    console.log(this.imgArray);
  }

  pageChanged(event: any){
    this.imgArray = [];
    this.imgArray = this.imgService.getpaginatedImageObjects(this.page, this.pageSize);
  }

}
