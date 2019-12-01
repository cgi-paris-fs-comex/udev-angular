import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
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
    private snackBar: MatSnackBar,
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
    if (data && (data.title && data.author)) {
      this.bookService.add(data);
      this.bookForm.reset();
      this.openSnackBar('Le livre a été ajouté');
    }
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Super!', {
      duration: 5000,
    });
  }

}
