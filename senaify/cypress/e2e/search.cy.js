describe('Teste da tela de pesquisa', () => {

  let musica = "Heartburn"

  before(() => {
    cy.visit('/')
  })

  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.get("[href='/Search']").click()
    cy.scrollTo("top")
  });

  it('Procurar por uma musica', () => {
    cy.get("[data-testid='campoBusca']").type(musica)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });

  // it('Selecionar a desejada', () => {
  //   cy.get("[aria-label='music-item']").contains(musica).first().click();
  //   // cy.get("[aria-label='music-item']").contains(/^(Heartburn)/i).click();
  // });

  it('Clicou no botao de curtir', () => {
    cy.wait(1500)
    
    let button = cy.get("[aria-label='music-item']").contains(musica).closest("[aria-label='music-item']")
    button.click();
    
    let favorito = button.find("[data-testid='icon-button']")
    favorito.click()
  });
})