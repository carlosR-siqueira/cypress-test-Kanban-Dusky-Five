describe('Estrutura do Kanban', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  it('deve ter colunas do Kanban visíveis', () => {
    // Verifica se as colunas principais estão presentes
    const expectedColumns = ['To Do', 'In Progress', 'Done']
    
    expectedColumns.forEach(columnName => {
      cy.contains(columnName).should('be.visible')
    })
  })

  it('deve ter área para cards', () => {
    // Verifica se há áreas para cards em cada coluna
    cy.get('[data-testid="kanban-column"]').each(($column) => {
      cy.wrap($column).should('be.visible')
      cy.wrap($column).should('have.class', 'kanban-column')
    })
  })

  it('deve ter botões de ação', () => {
    // Verifica se há botões para adicionar cards
    cy.get('button').should('have.length.greaterThan', 0)
  })

  it('deve ter layout responsivo', () => {
    cy.testResponsiveDesign()
  })

  it('deve ter elementos de acessibilidade', () => {
    cy.checkAccessibility()
  })
}) 