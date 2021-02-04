/**
 * Title: composer-details.component.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: Composer details component (Composer details page)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer|undefined;
 
  constructor(private route:ActivatedRoute,private composerService:ComposerService) {
    const paramComposerId = this.route.snapshot.paramMap.get('composerId')|| "";

    this.composerId = parseInt(paramComposerId, 10);

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
      ;
    }
  }

  ngOnInit(): void {

  }

}
