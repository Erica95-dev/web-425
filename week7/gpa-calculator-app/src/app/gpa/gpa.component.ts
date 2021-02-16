/*
 * Title: gpa.component.ts
 * Author: Erica Perry
 * Date: Feb  9 2021
 * Description: agpa.component.ts */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}

