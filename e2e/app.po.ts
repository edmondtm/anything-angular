import { browser, element, by } from 'protractor';

export class AnythingAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('any-root h1')).getText();
  }
}
