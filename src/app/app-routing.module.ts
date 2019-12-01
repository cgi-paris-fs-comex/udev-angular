import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {LibraryComponent} from './library/library.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'books/:bookId', component: BookComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
