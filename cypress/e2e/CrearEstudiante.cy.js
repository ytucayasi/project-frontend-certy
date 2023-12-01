describe('UserCreate Component E2E Test', () => {
  it('should fill inputs and submit the form', () => {
    cy.visit('http://localhost:5173'); // Replace with your actual application URL

    // Ingresar correo y contraseña en el formulario de inicio de sesión
    cy.get('input[placeholder="Ingrese su correo"]').type('saul@gmail.com');
    cy.get('input[placeholder="Ingrese su contraseña"]').type('123456');

    // Hacer clic en el botón de ingreso
    cy.get('button').contains('Ingresar').click();

    cy.visit('http://localhost:5173/estudiantes');

    cy.get('button').contains('Registrar').click();

    // Fill in the input fields
    cy.get('[name="nombre"]').type('Prueba');
    cy.get('[name="correo"]').type('prueba@gmail.com');
    cy.get('[name="clave"]').type('123456');
    cy.get('[name="nombres"]').type('Nombre de Prueba ');
    cy.get('[name="apellidos"]').type('Nombre de apellido');
    cy.get('[name="dni"]').type('12345678');
    cy.get('[name="codigo_universitario"]').type('123456789');
    cy.get('[name="fecha_nacimiento"]').type('2000-01-01');

    // Click the Register button
    cy.get('button').contains('Registrar').click();

    // You can add assertions here to check if the form submission was successful
    // For example, check if a success message is displayed or if the user is redirected to another page.
    // You can use `cy.contains` or other Cypress commands for these assertions.
  });
});