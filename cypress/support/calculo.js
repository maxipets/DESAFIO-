export class  Calculo  {
    control() {
      let subtotal, tax;
  
    // Obtener subtotal
    cy.get('[data-test="subtotal-label"]').invoke('text').then((text) => {
      subtotal = parseFloat(text.replace(/[^\d.]/g, ''));
    });
  
    // Obtener tax
    cy.get('[data-test="tax-label"]').invoke('text').then((text) => {
      tax = parseFloat(text.replace(/[^\d.]/g, ''));
    });
  
    // Validar total
    cy.then(() => {
      const totalEsperado = (subtotal + tax).toFixed(2);
      cy.get('[data-test="total-label"]')
        .invoke('text')
        .then((text) => {
          const totalObtenido = parseFloat(text.replace(/[^\d.]/g, ''));
          expect(totalObtenido).to.eq(Number(totalEsperado));
        });
      });
    }
  }
  