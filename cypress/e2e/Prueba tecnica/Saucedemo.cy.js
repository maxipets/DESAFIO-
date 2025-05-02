import { Calculo } from "../../support/calculo.js";
import { Login } from "../../support/login.js";
import { Botones } from "../../support/botones.js";

describe('desafio suace demo', () => {
  let userdata;
  const calculo = new Calculo();
  const login = new Login();
  const botones = new Botones();
  
  before(() => {
    cy.fixture('userData').then((data) => {
        userdata = data; 
    });
  });

  it('Flujo de compra', () => {
    cy.visit('');  
    login.escribirUsuario(Cypress.env('username'));
    login.escribircontraseña(Cypress.env('password'));
    login.botonLogin();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    botones.carrito();
    botones.checkout();
    
    cy.fixture('userData').then((data) => {
      const usuario = data[4]; 
      cy.get('[data-test="firstName"]').type(usuario.firstName);
      cy.get('[data-test="lastName"]').type(usuario.lastName);
      cy.get('[data-test="postalCode"]').type(usuario.postalCode);
    });
    
    botones.continuar();
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99');
    calculo.control();
    botones.finalizar();
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    botones.volver();
    botones.cerrarSesion();
  });
});

