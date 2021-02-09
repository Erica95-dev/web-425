/*
Title: app.component.ts
Author: Erica Perry
Date:1/4/2021
Modified: Erica Perry
Description: ap.component.ts
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;

  assignment: string = 'Exercise 2.3 - Data Binding';
}
