describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173'); // Replace with your actual application URL

    // Ingresar correo y contraseña en el formulario de inicio de sesión
    cy.get('input[placeholder="Ingrese su correo"]').type('saul@gmail.com');
    cy.get('input[placeholder="Ingrese su contraseña"]').type('123456');

    // Hacer clic en el botón de ingreso
    cy.get('button').contains('Ingresar').click();

    cy.visit('http://localhost:5173/estudiantes');

    cy.get('button').contains('Ver').click();

    // Fill in the input fields
    cy.get('[name="nombre"]').clear().type('Nombre Actualizado');
    cy.get('[name="correo"]').clear().type('actualizado@gmail.com');
    cy.get('[name="clave"]').clear().type('123456');
    cy.get('[name="nombres"]').clear().type('Nombre de Prueba');
    cy.get('[name="apellidos"]').clear().type('Nombre de apellido');
    cy.get('[name="dni"]').clear().type('87654321');
    cy.get('[name="codigo_universitario"]').clear().type('987654321');
    cy.get('[name="fecha_nacimiento"]').type('2000-02-08');

    // Click the Register button
    cy.get('button').contains('Actualizar').click();
  })
})