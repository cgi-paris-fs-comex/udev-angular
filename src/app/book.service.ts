import {Injectable} from '@angular/core';
import {library} from './library';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = library;

  add(book) {
    const id = (this.books.length + 1).toString();
    this.books.push({id, ...book});
  }

  getAll() {
    return this.books;
  }

  getById(id) {
    return this.books.filter(book => book.id === id)[0];
  }
}
