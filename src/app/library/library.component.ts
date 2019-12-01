import {Component, OnInit} from '@angular/core';
import {library} from '../library';

@Component({
  selector: 'ngu-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  library = library;

  constructor() { }

  ngOnInit() {
  }

}
