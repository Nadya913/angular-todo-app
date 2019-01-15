import { TodoAppPage } from './app.po';
import {browser, protractor} from 'protractor';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

 /* it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });*/

  it('test ', () => {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get('http://www.makemytrip.com/');
    page.setFromValue();
    expect (page.getFromText()).toEqual('New Delhi (DEL)');
    page.setToValue();
    expect (page.getToText()).toEqual('Colombo (CMB)');
    page.setDepartDate();
    page.setReturnDate();
    browser.sleep(5000);
    page.today();
  });
});
