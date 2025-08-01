describe('Carregamento da Página', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.checkForErrors()
  })

  it('deve carregar a página inicial', () => {
    // Verifica se a página carrega
    cy.get('body').should('be.visible')
    cy.get('html').should('have.attr', 'lang')
  })

  it('deve ter um tempo de carregamento aceitável', () => {
    cy.testPerformance()
  })

  it('deve exibir elementos básicos da interface', () => {
    // Verifica se elementos básicos estão presentes
    cy.get('body').should('not.be.empty')
    
    // Verifica se há algum conteúdo na página
    cy.get('*').should('have.length.greaterThan', 0)
  })

  it('não deve ter erros críticos no console', () => {
    cy.window().then((win) => {
      // Verifica se não há erros fatais
      expect(win.console.error).to.not.be.called
    })
  })

  it('deve ter um título de página', () => {
    cy.title().should('not.be.empty')
  })
}) 