import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {library} from '../library';

@Component({
  selector: 'ngu-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.book = library.filter(book => book.id === params.get('bookId'))[0];
    });
  }

}
