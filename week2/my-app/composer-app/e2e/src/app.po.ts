/* 
Title: assignment 2.4
Author: Erica Perry
Date:1/9/2021
Modified: Erica Perry
Description: app.po.ts
*/ 

import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}
