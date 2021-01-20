/**
 * Title: composer-details.component.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: Composer details component (Composer details page)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer|undefined;

  constructor(private route: ActivatedRoute) {
    const paramComposerId = this.route.snapshot.paramMap.get('composerId')|| "";

    this.composerId = parseInt(paramComposerId, 10);

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {

  }

}
