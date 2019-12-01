import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'ngu-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  bookForm;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    this.bookService.add(data);
    this.bookForm.reset();
  }

}
