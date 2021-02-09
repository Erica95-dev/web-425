/**
 * Title: composer-list.component.ts
 * Author: Erica Perry
 * Date: 20 April 2021
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl:'./composer-list.component.html',
  styleUrls: ['./composer-list.component.scss']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }
  ngOnInit(): void {
  }
 
 }

