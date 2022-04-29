import { Injectable } from '@angular/core';
import { ImageObject } from '../_models/ImageObject';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imgCollection: Array<Partial<ImageObject>> = [
    {imgId: 1, imgPath: './assets/img/img-03.jpg', bigImgPath: './assets/img/img-03-big.jpg', imgHoverName: 'Clocks', createdAt: new Date("2020-10-18"), viewsCount: 9906 },
    {imgId: 2, imgPath: './assets/img/img-04.jpg', bigImgPath: './assets/img/img-04-big.jpg', imgHoverName: 'Plants', createdAt: new Date("2020-10-14"), viewsCount: 16100 },
    {imgId: 3, imgPath: './assets/img/img-05.jpg', bigImgPath: './assets/img/img-05-big.jpg', imgHoverName: 'Morning', createdAt: new Date("2020-10-12"), viewsCount: 12460 },
    {imgId: 4, imgPath: './assets/img/img-06.jpg', bigImgPath: './assets/img/img-06-big.jpg', imgHoverName: 'Pinky', createdAt: new Date("2020-10-10"), viewsCount: 11402 },
    {imgId: 5, imgPath: './assets/img/img-01.jpg', bigImgPath: './assets/img/img-01-big.jpg', imgHoverName: 'Hangers', createdAt: new Date("2020-09-24"), viewsCount: 16008 },
    {imgId: 6, imgPath: './assets/img/img-02.jpg', bigImgPath: './assets/img/img-02-big.jpg', imgHoverName: 'Perfumes', createdAt: new Date("2020-09-20"), viewsCount: 12860 },
    {imgId: 7, imgPath: './assets/img/img-07.jpg', bigImgPath: './assets/img/img-07-big.jpg', imgHoverName: 'Bus', createdAt: new Date("2020-09-16"), viewsCount: 10900 },
    {imgId: 8, imgPath: './assets/img/img-08.jpg', bigImgPath: './assets/img/img-08-big.jpg', imgHoverName: 'New York', createdAt: new Date("2020-09-12"), viewsCount: 11300 },
    {imgId: 9, imgPath: './assets/img/img-09.jpg', bigImgPath: './assets/img/img-09-big.jpg', imgHoverName: 'Abstract', createdAt: new Date("2020-09-10"), viewsCount: 42700 },
    {imgId: 10, imgPath: './assets/img/img-10.jpg', bigImgPath: './assets/img/img-10-big.jpg', imgHoverName: 'Flowers', createdAt: new Date("2020-09-08"), viewsCount: 11402 },
    {imgId: 11, imgPath: './assets/img/img-11.jpg', bigImgPath: './assets/img/img-11-big.jpg', imgHoverName: 'Rosy', createdAt: new Date("2020-09-04"), viewsCount: 32906 },
    {imgId: 12, imgPath: './assets/img/img-12.jpg', bigImgPath: './assets/img/img-12-big.jpg', imgHoverName: 'Rock', createdAt: new Date("2020-08-28"), viewsCount: 50700 },
    {imgId: 13, imgPath: './assets/img/img-13.jpg', bigImgPath: './assets/img/img-13-big.jpg', imgHoverName: 'Purple', createdAt: new Date("2020-08-22"), viewsCount: 107510 },
    {imgId: 14, imgPath: './assets/img/img-14.jpg', bigImgPath: './assets/img/img-14-big.jpg', imgHoverName: 'Sea', createdAt: new Date("2020-08-14"), viewsCount: 118006 },
    {imgId: 15, imgPath: './assets/img/img-15.jpg', bigImgPath: './assets/img/img-15-big.jpg', imgHoverName: 'Turtle', createdAt: new Date("2020-08-09"), viewsCount: 121300 },
    {imgId: 16, imgPath: './assets/img/img-16.jpg', bigImgPath: './assets/img/img-16-big.jpg', imgHoverName: 'Peace', createdAt: new Date("2020-08-03"), viewsCount: 21204 }
  ];

  retItem: Array<Partial<ImageObject>>= [];

  constructor() { }

  getImageObjects(): Array<Partial<ImageObject>>{
    return this.imgCollection;
  }

  getpaginatedImageObjects(page: number, pageSize: number): Array<Partial<ImageObject>>{
    this.retItem = [];
    for (var i = (page-1) * pageSize; i < (page * pageSize) && i < this.imgCollection.length; i++) {
      this.retItem.push(this.imgCollection[i]);
    }
    return this.retItem;
  }
}
