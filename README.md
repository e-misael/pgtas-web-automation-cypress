# Automação de Testes com Cypress - Automation Practice Website

Este projeto foi criado como projeto de conclusão da disciplina de Automação de Testes Web, ministrada pelo professor Samuel Lucas.

## Propósito

 Criar uma suíte de testes automatizados com Cypress para interagir com o site https://automationexercise.com/test_cases. Foram criados scripts para os casos de teste 1, 2, 3, 4, 5, 11, 12, 16, 17 e 22, conforme proposto. Nela, utilizei a geração dinâmica de dados de teste para garantir que cada execução do teste seja independente.

## Geração de Dados de Teste

Os dados de teste são gerados automaticamente antes de cada execução, garantindo dados frescos para cada execução de teste.

- **Gerar Dados de Teste**: O script `generateTestData.js` em `cypress/support/data/` cria os dados necessários.

## Instalando o Cypress localmente
```bash
npm install
```
Isso instalará o Cypress e suas dependências.

### 1. Executando os testes localmente

#### 1.1. **Linha de comando**

Para executar a suíte complete de testes via linha de comando, use:

```bash
npm run test
```
Isso gerará os dados de teste e executará os testes no Chrome em modo headless.

#### 1.2. **Via interface do Cypress**

Para executar os testes através da interface gráfica, use:

```bash
npm run generate:data
npx cypress open
Selecione os testes na interface para executá-los.
```
Isso fará com que os dados de teste sejam criados e que a suíte seja disponibilizada via interface gráfica para execução.

## Relatório de Execução de Teste local

Após a execução dos testes, um relatório com o resultado da execução será gerado e disponibilizado na pasta `cypress/reports/`.

### 2. Executando os testes via BrowserStack

Para executar os testes via BrowserStack, e´ necessário ter uma conta ativa no BrowserStack. Para configurá-lo, basta atualizar o arquivo `browserstack.json` com seu usuário e chave de acesso obtidos nas informações da conta de usuário.

```bash
browserstack-cypress run
```

O resultado do teste pode ser visualizado no seguinte link:
```bash
https://observability.browserstack.com/projects/PGTAS_TrabalhoFinal/builds
```

