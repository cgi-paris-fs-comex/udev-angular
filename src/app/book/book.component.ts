import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'ngu-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.book = this.bookService.getById(params.get('bookId'));
    });
  }

}
