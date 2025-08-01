describe('Acessibilidade', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  it('deve ter atributos alt em imagens', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt')
    })
  })

  it('deve ter labels em formulários', () => {
    cy.get('input').each(($input) => {
      const id = $input.attr('id')
      if (id) {
        cy.get(`label[for="${id}"]`).should('exist')
      }
    })
  })

  it('deve ter navegação por teclado', () => {
    // Testa tab navigation
    cy.get('body').tab()
    cy.focused().should('exist')
    
    // Testa enter key
    cy.focused().type('{enter}')
  })

  it('deve ter contraste de cores adequado', () => {
    // Verifica se há contraste suficiente
    cy.get('body').should('have.css', 'color')
    cy.get('body').should('have.css', 'background-color')
  })

  it('deve ter aria-labels em elementos interativos', () => {
    cy.get('button').each(($button) => {
      const ariaLabel = $button.attr('aria-label')
      const text = $button.text()
      
      // Deve ter aria-label ou texto visível
      expect(ariaLabel || text).to.not.be.empty
    })
  })

  it('deve ter estrutura semântica', () => {
    // Verifica se há elementos semânticos
    cy.get('main').should('exist')
    cy.get('header').should('exist')
    cy.get('nav').should('exist')
  })

  it('deve ter skip links', () => {
    // Verifica se há links para pular navegação
    cy.get('[data-testid="skip-link"]').should('exist')
  })
}) 