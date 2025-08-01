# GitHub Actions - Configuração e Uso

## 📋 Visão Geral

Este projeto está configurado com GitHub Actions para executar testes automatizados e gerar relatórios detalhados.

## 🚀 Workflows Configurados

### 1. **Cypress Tests** (`.github/workflows/cypress-tests.yml`)

**Quando executa:**
- Push para `main` ou `master`
- Pull requests para `main` ou `master`
- Manualmente (workflow_dispatch)

**O que faz:**
- Instala dependências
- Executa todos os testes Cypress
- Gera screenshots em caso de falha
- Grava vídeos de todos os testes
- Cria logs detalhados
- Faz upload de artifacts

### 2. **Generate Test Report** (`.github/workflows/test-report.yml`)

**Quando executa:**
- Após a conclusão do workflow "Cypress Tests"

**O que faz:**
- Gera relatório compreensivo
- Inclui análise dos problemas documentados
- Cria sumário para Pull Requests
- Faz upload do relatório como artifact

## 📊 Artifacts Gerados

### Screenshots
- **Quando**: Apenas quando testes falham
- **Onde**: `cypress/screenshots/`
- **Nome**: `cypress-screenshots`

### Vídeos
- **Quando**: Sempre (sucesso ou falha)
- **Onde**: `cypress/videos/`
- **Nome**: `cypress-videos`

### Logs de Execução
- **Quando**: Sempre
- **Nome**: `test-execution-log`
- **Conteúdo**: Log detalhado da execução

### Relatório Compreensivo
- **Quando**: Sempre
- **Nome**: `comprehensive-test-report`
- **Conteúdo**: Relatório completo com análise

## 🎯 Como Usar

### Execução Manual
1. Vá para a aba **Actions** no GitHub
2. Clique em **"Cypress Tests"**
3. Clique em **"Run workflow"**
4. Escolha a branch e clique em **"Run workflow"**

### Execução Automática
- **Push**: Executa automaticamente ao fazer push
- **Pull Request**: Executa automaticamente ao criar PR

### Visualizar Resultados
1. Vá para a aba **Actions**
2. Clique no workflow executado
3. Clique no job **"Cypress E2E Tests"**
4. Role para baixo para ver os artifacts

## 📈 Scripts NPM Disponíveis

```bash
# Executar todos os testes
npm test

# Abrir Cypress Test Runner
npm run test:open

# Executar com interface visual
npm run test:headed

# Executar testes específicos
npm run test:loading      # Apenas testes de carregamento
npm run test:structure    # Apenas testes de estrutura
npm run test:functionality # Apenas testes de funcionalidade
npm run test:ui           # Apenas testes de UI/UX
npm run test:accessibility # Apenas testes de acessibilidade

# Executar todos os testes em sequência
npm run test:all

# Executar para CI/CD
npm run test:ci
```

## 🔧 Configuração

### Variáveis de Ambiente
O workflow usa as seguintes configurações:
- **Node.js**: 18.x
- **Browser**: Chrome (headless)
- **Timeout**: 120 segundos
- **Base URL**: https://kanban-dusky-five.vercel.app/

### Personalização
Para modificar o comportamento:

1. **Alterar browser**:
   ```yaml
   browser: firefox  # ou edge
   ```

2. **Alterar timeout**:
   ```yaml
   wait-on-timeout: 60  # segundos
   ```

3. **Adicionar variáveis de ambiente**:
   ```yaml
   env:
     CYPRESS_BASE_URL: https://kanban-dusky-five.vercel.app/
   ```

## 📊 Interpretação dos Resultados

### Testes Esperados para Falhar
Os testes são **esperados para falhar** devido aos problemas documentados:
- Issues 1-4: Problemas críticos
- Issues 5-8: Problemas de alta prioridade
- Issues 9-10: Problemas de média prioridade

### Análise dos Falhas
Cada falha corresponde a um problema documentado no Jira:
- **Falhas = Validação** dos problemas identificados
- **Screenshots** mostram o estado da aplicação
- **Vídeos** mostram a execução completa

## 🎯 Benefícios

1. **Automação**: Testes executados automaticamente
2. **Documentação**: Relatórios gerados automaticamente
3. **Rastreabilidade**: Logs detalhados de cada execução
4. **Artefatos**: Screenshots e vídeos para análise
5. **Integração**: Funciona com Pull Requests

## 📧 Relatórios para Entrega

Os relatórios gerados podem ser incluídos na entrega:
- **Comprehensive Test Report**: Relatório completo
- **Test Execution Log**: Log detalhado
- **Screenshots**: Evidências visuais dos problemas
- **Vídeos**: Demonstração dos problemas

---

*Documentação gerada automaticamente - Última atualização: 31/07/2024* 