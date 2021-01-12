/* 
Title: assignment 2.3
Author: Erica Perry
Date:1/9/2021
Modified: Erica Perry
Description: app.components
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
