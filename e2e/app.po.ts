import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText(page) {
    return element(by.tagName(page)).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }

  hasClass(element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};
}
