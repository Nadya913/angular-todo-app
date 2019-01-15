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
    browser.wait(EC.presenceOf(element(by.css('div.locationFilter.autocomplete_from'))), 2000);
    element.all (by.css('div.locationFilter.autocomplete_from li.ui-menu-item')).first().click();
  }

  setToValue() {
    element.all (by.css('div.locationFilter.autocomplete_to li.ui-menu-item')).last().click();
  }

  getFromText() {
    return element (by.id('hp-widget__sfrom')).getAttribute('value');
  }
  getToText() {
    return element (by.id('hp-widget__sTo')).getAttribute('value');
  }

  setDepartDate () {
    element.all (by.css('div.dateFilter.hasDatepicker td[data-handler=selectDay]')).first().click();
  }

  setReturnDate () {
    element (by.id('hp-widget__return')).click();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(element.all (by.css('div.dateFilterReturn.hasDatepicker td[data-handler=selectDay]'))
      .last()), 2000);
    element.all (by.css('div.dateFilterReturn.hasDatepicker td[data-handler=selectDay]')).last().click();
  }

  today () {
    const date = new Date();
    console.log(date);
    console.log(date.getDay());
    console.log(date.getUTCMonth());
    console.log (date.getUTCDay());

  }



}
