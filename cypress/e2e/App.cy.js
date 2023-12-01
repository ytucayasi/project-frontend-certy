describe('App functionality', () => {
  it('should load the application and navigate to Dashboard for logged-in user', () => {
    // Visitar la aplicación
    cy.visit('http://localhost:5173/');

    // Verificar que esté en la página de inicio de sesión
    cy.url().should('include', '/');

    // Ingresar correo y contraseña en el formulario de inicio de sesión
    cy.get('input[placeholder="Ingrese su correo"]').type('saul@gmail.com');
    cy.get('input[placeholder="Ingrese su contraseña"]').type('123456');

    // Hacer clic en el botón de ingreso
    cy.get('button').contains('Ingresar').click();
  });
});