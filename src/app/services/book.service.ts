import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../models/book';
import {BookRepository} from './book.repository';

@Injectable()
export class BookService implements BookRepository {
  private url: string = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  add(book: Book): void {
    this.http.post<Book>(this.url, book);
  }

  all(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  byId(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }
}
