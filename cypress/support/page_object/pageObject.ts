export class HomePage {
    static visitHomePage() {
      cy.visit('https://www.amazon.com/');
    }
  
    static clickContinueShoppingButton() {
      cy.get('.a-button-text').click();
    }
  
    static clickHamburgerMenu() {
      cy.get('#nav-hamburger-menu').click();
    }
  
    static clickComputersCategory() {
      cy.get('.hmenu-visible > li:nth-child(8) > .hmenu-item').click();
    }
  }
  
 export class TabletAccessoriesPage {
    static clickSortByDropdown() {
      cy.get('#a-autoid-0-announce').click();
    }
  
    static selectNewestArrivalsOption() {
      cy.get('#s-result-sort-select_4').click();
    }
  
    static clickFirstProduct() {
      cy.get('[alt="JETech Case for iPad Air 5 (2022 5th Generation 10.9-Inch), Slim Stand Hard Back Shell Cover with Auto Wake/Sleep (Light P..."]').click();
    }
  }
  
 export class ProductPage {
    static clickProductTitle() {
      cy.get('#title > #productTitle').click();
    }
    static aboutThisPage() {
        cy.contains('About this item');
    }
  }
  