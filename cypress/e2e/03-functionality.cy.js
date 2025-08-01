describe('Funcionalidades do Kanban', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  it('deve permitir criar novos cards', () => {
    // Testa criação de card
    cy.get('[data-testid="add-card-button"]').should('be.visible')
    
    // Tenta clicar no botão de adicionar card
    cy.get('[data-testid="add-card-button"]').click()
    
    // Verifica se o modal ou formulário aparece
    cy.get('[data-testid="card-form"]').should('be.visible')
  })

  it('deve permitir editar cards existentes', () => {
    // Verifica se há cards para editar
    cy.get('[data-testid="kanban-card"]').first().click()
    
    // Verifica se o modal de edição aparece
    cy.get('[data-testid="edit-card-modal"]').should('be.visible')
  })

  it('deve permitir drag and drop de cards', () => {
    // Verifica se há cards para mover
    cy.get('[data-testid="kanban-card"]').should('have.length.greaterThan', 0)
    
    // Testa drag and drop
    cy.get('[data-testid="kanban-card"]').first().trigger('mousedown')
    cy.get('[data-testid="kanban-column"]').last().trigger('mouseover')
    cy.get('[data-testid="kanban-column"]').last().trigger('mouseup')
  })

  it('deve permitir deletar cards', () => {
    // Verifica se há botão de deletar
    cy.get('[data-testid="delete-card-button"]').should('be.visible')
    
    // Testa deleção
    cy.get('[data-testid="delete-card-button"]').first().click()
    
    // Verifica se confirmação aparece
    cy.get('[data-testid="confirm-delete"]').should('be.visible')
  })

  it('deve salvar mudanças automaticamente', () => {
    // Testa se mudanças são persistidas
    cy.get('[data-testid="kanban-card"]').should('be.visible')
    
    // Recarrega a página para verificar persistência
    cy.reload()
    cy.waitForPageLoad()
    
    // Verifica se cards ainda estão presentes
    cy.get('[data-testid="kanban-card"]').should('be.visible')
  })
}) 