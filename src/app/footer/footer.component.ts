import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook as IconDefinition;
  faTwitter = faTwitter as IconDefinition;
  faInstagram = faInstagram as IconDefinition;
  faPinterest = faPinterest as IconDefinition;
  faYoutube = faYoutube as IconDefinition;
  constructor() { }

  ngOnInit(): void {
  }

}
