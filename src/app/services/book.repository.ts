import {Observable} from 'rxjs';
import {Book} from '../models/book';

export abstract class BookRepository {
  abstract add(book): void;

  abstract all(): Observable<Book[]>;

  abstract byId(id): Observable<Book>;
}
