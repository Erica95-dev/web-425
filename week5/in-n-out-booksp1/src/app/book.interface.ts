/**
 * Title: book.interface.ts
 * Author: Erica Perry
 * Date: 30 Jan 2021
 * Description: Book interface object
 */

export interface IBook {
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
  }