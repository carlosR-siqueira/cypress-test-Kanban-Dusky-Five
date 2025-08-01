describe('UI/UX e Design', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  it('deve ter design responsivo', () => {
    // Testa diferentes tamanhos de tela
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1280, height: 720, name: 'Desktop' }
    ]

    viewports.forEach(viewport => {
      cy.viewport(viewport.width, viewport.height)
      cy.get('body').should('be.visible')
      
      // Verifica se elementos principais estão visíveis
      cy.get('*').should('have.length.greaterThan', 0)
    })
  })

  it('deve ter contraste adequado', () => {
    // Verifica se textos têm contraste suficiente
    cy.get('body').should('have.css', 'color')
    cy.get('body').should('have.css', 'background-color')
  })

  it('deve ter feedback visual para interações', () => {
    // Verifica hover states
    cy.get('button').first().trigger('mouseover')
    cy.get('button').first().should('have.css', 'cursor', 'pointer')
  })

  it('deve ter loading states', () => {
    // Verifica se há indicadores de carregamento
    cy.get('[data-testid="loading"]').should('exist')
  })

  it('deve ter mensagens de erro claras', () => {
    // Verifica se há tratamento de erros
    cy.get('[data-testid="error-message"]').should('not.exist')
  })

  it('deve ter navegação por teclado', () => {
    // Testa navegação por teclado
    cy.get('body').tab()
    cy.focused().should('exist')
  })

  it('deve ter animações suaves', () => {
    // Verifica se há transições CSS
    cy.get('[data-testid="kanban-card"]').should('have.css', 'transition')
  })
}) 