describe('User', () => {
  it('should search and list users', () => {
    cy.visit('http://localhost:5173'); // Replace with your actual application URL

    // Ingresar correo y contraseña en el formulario de inicio de sesión
    cy.get('input[placeholder="Ingrese su correo"]').type('saul@gmail.com');
    cy.get('input[placeholder="Ingrese su contraseña"]').type('123456');

    // Hacer clic en el botón de ingreso
    cy.get('button').contains('Ingresar').click();

    cy.visit('http://localhost:5173/estudiantes');
    // Ingresa algo en el campo de búsqueda
    cy.get('input[type="text"]').type('202012379');

    // Haz clic en el botón de búsqueda
    cy.get('.fa-magnifying-glass').click();

    // Espera a que la lista de usuarios se cargue
    cy.get('.user-list-item').should('exist');

    // Puedes agregar más aserciones según la lógica específica de tu aplicación
  });
});