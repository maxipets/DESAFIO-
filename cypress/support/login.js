export class  Login  {
    escribirUsuario(usuario) {
      cy.get('[data-test="username"]').type(usuario);
    }

    escribircontraseña(contrasena) {
      cy.get('[data-test="password"]').type(contrasena);
    }

    botonLogin() {
      cy.get('[data-test="login-button"]').click();
    }

   
  }