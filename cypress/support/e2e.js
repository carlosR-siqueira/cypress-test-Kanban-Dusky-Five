// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Comandos customizados para o Kanban
Cypress.Commands.add('waitForPageLoad', () => {
  cy.wait(3000) // Aguarda carregamento inicial
})

Cypress.Commands.add('checkKanbanColumns', () => {
  // Verifica se as colunas do Kanban estão presentes
  cy.get('[data-testid="kanban-column"]').should('have.length.at.least', 1)
})

Cypress.Commands.add('checkForErrors', () => {
  // Verifica se há erros no console
  cy.window().then((win) => {
    cy.spy(win.console, 'error').as('consoleError')
  })
})

Cypress.Commands.add('testResponsiveDesign', () => {
  // Testa responsividade em diferentes tamanhos
  const viewports = [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1280, height: 720 } // Desktop
  ]
  
  viewports.forEach(viewport => {
    cy.viewport(viewport.width, viewport.height)
    cy.get('body').should('be.visible')
  })
}) 