/**
 * Title: composer-list.component.ts
 * Author: Erica Perry
 * Date: 20 April 2021
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import {FormControl } from '@angular/forms';
import { debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-composer-list',
  templateUrl:'./composer-list.component.html',
  styleUrls: ['./composer-list.component.scss']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  textSearch = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.textSearch.valueChanges.pipe(debounceTime(500)).subscribe(val =>this.filterComposers(val));
  }

  ngOnInit(): void {
  }
 filterComposers(name: string) {
   alert(name);
 }
}
