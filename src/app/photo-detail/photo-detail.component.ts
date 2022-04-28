import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageObject } from '../_models/ImageObject';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  id: number;
  imgObj?: Partial<ImageObject>;
  imageObject: Array<object> = [
{
  image: './assets/img/slideshow/4.jpg',
  thumbImage: './assets/img/slideshow/4-thumb.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: './assets/img/slideshow/5.jpg',
  thumbImage: './assets/img/slideshow/5-thumb.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: './assets/img/slideshow/7.jpg',
  thumbImage: './assets/img/slideshow/7-thumb.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: './assets/img/slideshow/9.jpg',
  thumbImage: './assets/img/slideshow/9-thumb.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: './assets/img/slideshow/4.jpg',
  thumbImage: './assets/img/slideshow/4-thumb.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: './assets/img/slideshow/5.jpg',
  thumbImage: './assets/img/slideshow/5-thumb.jpg',
  alt: 'alt of image',
  title: 'title of image'
}
];

  constructor(@Inject(DOCUMENT) private document: Document,
  private route: ActivatedRoute, private imgService: ImageService)  { this.id = +this.route.snapshot.paramMap.get('id')!; }

  ngOnInit(): void {
    setTimeout(() =>{ this.document.body.classList.add('loaded');},500);
    this.imgObj = this.imgService.getImageObjects().find(x => x.imgId == this.id);
  }

}
