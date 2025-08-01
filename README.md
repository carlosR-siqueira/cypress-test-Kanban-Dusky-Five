# Kanban Dusky Five - Análise de Frontend e Testes E2E

## Sobre o Projeto

Fiz uma análise completa do site https://kanban-dusky-five.vercel.app/ e criei testes automatizados para validar os principais fluxos. O projeto inclui:

- **Documentação dos problemas encontrados**: Listei todos os bugs e issues que identifiquei durante os testes
- **Testes E2E com Cypress**: Criei scripts automatizados para testar as funcionalidades principais

## Como usar

### O que você precisa
- Node.js (versão 14 ou mais recente)
- npm ou yarn

### Instalação
```bash
npm install
```

### Rodando os testes
```bash
# Abrir o Cypress Test Runner (interface visual)
npx cypress open

# Rodar todos os testes de uma vez (modo headless)
npx cypress run
```

## Estrutura dos arquivos

```
├── cypress/
│   ├── e2e/           # Testes end-to-end
│   ├── fixtures/      # Dados de teste
│   └── support/       # Configurações e comandos customizados
├── docs/
│   └── problemas.md   # Lista detalhada dos problemas encontrados
└── README.md
```

## O que foi feito

### Documentação
Criei uma documentação completa dos problemas que encontrei no site. Você pode ver tudo detalhado no arquivo `docs/problemas.md`.

### Testes automatizados
Desenvolvi testes que cobrem:
- Navegação básica do site
- Funcionalidades do Kanban (drag & drop, criação de cards)
- Validação dos elementos visuais
- Testes de responsividade
- Verificação de acessibilidade

## Entrega

- **Documentação**: `docs/problemas.md`
- **Código**: Repositório no GitHub
- **Prazo**: 01/08
- **Email**: rochelana.feitosa@kukac.com.br 