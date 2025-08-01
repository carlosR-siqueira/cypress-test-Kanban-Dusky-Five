// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Comandos específicos para testes do Kanban

Cypress.Commands.add('login', (email, password) => {
  // Comando para login (se necessário)
  cy.visit('/login')
  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="password"]').type(password)
  cy.get('[data-testid="login-button"]').click()
})

Cypress.Commands.add('createCard', (title, description) => {
  // Comando para criar um card
  cy.get('[data-testid="add-card-button"]').click()
  cy.get('[data-testid="card-title"]').type(title)
  cy.get('[data-testid="card-description"]').type(description)
  cy.get('[data-testid="save-card-button"]').click()
})

Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
  // Comando para drag and drop
  cy.get(sourceSelector).trigger('mousedown', { button: 0 })
  cy.get(targetSelector).trigger('mousemove').trigger('mouseup', { force: true })
})

Cypress.Commands.add('checkAccessibility', () => {
  // Verificações básicas de acessibilidade
  cy.get('img').each(($img) => {
    cy.wrap($img).should('have.attr', 'alt')
  })
  
  cy.get('button').each(($button) => {
    cy.wrap($button).should('have.attr', 'aria-label').or('have.text')
  })
})

Cypress.Commands.add('testPerformance', () => {
  // Teste básico de performance
  cy.window().then((win) => {
    const performance = win.performance
    const navigation = performance.getEntriesByType('navigation')[0]
    
    // Verifica se o carregamento foi rápido
    expect(navigation.loadEventEnd - navigation.loadEventStart).to.be.lessThan(3000)
  })
}) 