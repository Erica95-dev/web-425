/*
 * Title: book.service.ts
 * Author: Erica Perry
 * Date: Jan 30 2021
 * Description: book.service.ts */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780345514400',
        title: 'I know why the Caged Bird Sings',
        description: ' I Know Why the Caged Bird Sings captures the longing of lonely children, the brute insult of bigotry, and the wonder of words that can make the world right. Maya Angelou’s debut memoir is a modern American classic beloved worldwide.',
        numOfPages: 304,
        authors: ['Maya Angelou']
      },
      {
        isbn: '9780812980035',
        title: 'Letters to my Daughter',
        description: "Dedicated to the daughter she never had but sees all around her, Letter to My Daughter transcends genres and categories: guidebook, memoir, poetry, and pure delight. ",
        numOfPages: 192,
        authors: ['Maya Angelou']
      },
      {
        isbn: '9780394502526',
        title: 'And still I Rise',
        description: "Maya Angelou’s unforgettable collection",
        numOfPages: 64,
        authors: ['Maya Angelou']
      },
      {
        isbn: '9781400066117',
        title: 'MOM & ME & MOM',
        description: "A moving memoir about the legendary author’s relationship with her own mother",
        numOfPages: 224,
        authors: ['Maya Angelou']
      },
      {
        isbn: '9780812980325',
        title: 'The Heart of A Woman',
        description: "In The Heart of a Woman, Maya Angelou leaves California with her son, Guy, to move to New York.",
        numOfPages: 352,
        authors: ['Maya Angelou']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
