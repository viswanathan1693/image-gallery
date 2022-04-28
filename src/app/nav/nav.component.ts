import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
