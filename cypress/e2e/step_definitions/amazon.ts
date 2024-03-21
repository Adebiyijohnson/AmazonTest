import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps';

import { HomePage, TabletAccessoriesPage, ProductPage } from '../../support/page_object/pageObject'


Given('I visit the home page', () => {
  HomePage.visitHomePage()
});

When('I click on the continue shopping button three times', () => {
  HomePage.clickContinueShoppingButton();
  HomePage.clickContinueShoppingButton();
  HomePage.clickContinueShoppingButton();
});

When('I click on the hamburger menu', () => {
  HomePage.clickHamburgerMenu();
});

When('I click on the computers category', () => {
  HomePage.clickComputersCategory();
});

When('I scroll to the top of the page', () => {
  // Add code to scroll to the top of the page
});

When('I click on the sort by dropdown', () => {
  TabletAccessoriesPage.clickSortByDropdown();
});

When('I select the newest arrivals option', () => {
  TabletAccessoriesPage.selectNewestArrivalsOption();
});

When('I click on the first product', () => {
  TabletAccessoriesPage.clickFirstProduct();
});

When('I click on the product title', () => {
  ProductPage.clickProductTitle();
});

Then('I should see the product details page', () => {
  ProductPage.aboutThisPage().should('be.visible');
});