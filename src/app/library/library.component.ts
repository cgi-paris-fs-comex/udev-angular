import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'ngu-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  library;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.library = this.bookService.getAll();
  }

}
