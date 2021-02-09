/*
 * Title: base-layout.ts
 * Author: Erica Perry
 * Date: Feb 6 2021
 * Description: base-layout.ts
 * */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.4 - Layouts';
  }

  ngOnInit(): void {
  }

}