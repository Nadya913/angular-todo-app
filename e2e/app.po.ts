import {browser, element, by, protractor} from 'protractor';

export class TodoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  setFromValue() {
    element (by.id('hp-widget__sfrom')).click();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(element(by.css('li.ui-menu-item'))), 2000);
    element.all (by.css('li.ui-menu-item')).last().click();
  }

  getFromText() {
    return element (by.id('hp-widget__sfrom')).getAttribute('value');
  }


}
