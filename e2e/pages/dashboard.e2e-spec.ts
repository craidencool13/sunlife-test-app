import { Page } from "../app.po";
import { browser, by, element } from "protractor";

describe("Dashboard Page", () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe("Dashboard screen", () => {
    
    it("It should display the right content based on the menu selected", function () {
      page.navigateTo('/').then(async ()=>{
        var manageMenu = await element(by.id('manage'));
        var servicingMenu = await element(by.id('servicing'));

        servicingMenu.click().then(async ()=>{
          expect(await element(by.id('policyServicing')).isDisplayed()).toBeTruthy();
          expect(page.hasClass(await element(by.id('servicing')), 'active')).toBeTruthy();
        });

        manageMenu.click().then(async ()=>{
          expect(await element(by.id('manageFunds')).isDisplayed()).toBeTruthy();
          expect(page.hasClass(await element(by.id('manage')), 'active')).toBeTruthy();
        });
        
      })
    });

    it("It should go to policy page", function () {
      page.navigateTo('/').then(async ()=>{
        var coverage = await element(by.id('coverage'));
        
        coverage.click().then(async ()=>{
          let title = await page.getPageOneTitleText('page-policy-serving-details');
          expect(title).toEqual('All Policies');
        });

      })
    });

  });
});
