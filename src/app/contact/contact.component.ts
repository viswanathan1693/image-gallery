import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGlobe = faGlobe;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    setTimeout(() =>{ this.document.body.classList.add('loaded');},500);
  }

}
