import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../models/book';
import {library} from '../models/library';
import {BookRepository} from './book.repository';

@Injectable()
export class BookInMemory implements BookRepository {
  private books: Book[] = library;

  add(book): void {
    const id: string = (this.books.length + 1).toString();
    this.books.push({id, ...book});
  }

  all(): Observable<Book[]> {
    return of(this.books);
  }

  byId(id): Observable<Book> {
    return of(this.books.filter(book => book.id === id)[0]);
  }
}
