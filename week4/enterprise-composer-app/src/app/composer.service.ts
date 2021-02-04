/**
 * Title: composer.class.ts
 * Author: Erica Perry
 * Date: 20 Jan 2021
 * Description: Class file for the Composer object
 */

import { Injectable } from '@angular/core';
import { IComposer} from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: any;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 103, fullName: "Johannes Brahms", genre: "Classical"},
      {composerId: 104, fullName: "Joseph Haydn", genre: "Classical"}
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    return this.composers.find((composer: { composerId: number; })=>{
      return composer.composerId === composerId
    });
  }
}


