export class Botones {
    carrito() {
      cy.get('[data-test="shopping-cart-link"]').click();
    }
  
    checkout() {
      cy.get('[data-test="checkout"]').click(); 
    }
  
    continuar() {
      cy.get('[data-test="continue"]').click();
    }
  
    finalizar() {
      cy.get('[data-test="finish"]').click();
    }
  
    volver() {
      cy.get('[data-test="back-to-products"]').click();
    }
  
    cerrarSesion() {
      cy.get('.header_label').click();
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();   
    }
  }
  