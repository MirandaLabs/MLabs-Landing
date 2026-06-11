# Pré-cadastro do Orkestra → Google Sheets

A página `/projetos/orkestra` tem uma seção de pré-cadastro que coleta **nome** e
**e-mail** e envia para um Web App do Google Apps Script, que grava os dados em
uma planilha do Google Sheets. O frontend é estático (GitHub Pages), então toda
a "API" vive nesse script — não há backend a manter.

Siga os passos abaixo na sua conta Google. Leva ~5 minutos.

## 1. Crie a planilha

1. Abra [sheets.google.com](https://sheets.google.com) e crie uma planilha em branco.
2. Renomeie a primeira aba para `Pre-cadastro` (ou outro nome de sua preferência).
3. Na primeira linha, crie os cabeçalhos:

   | A          | B    | C      |
   | ---------- | ---- | ------ |
   | Data/Hora  | Nome | E-mail |

## 2. Crie o Apps Script

1. Na planilha, vá em **Extensões → Apps Script**.
2. Apague o conteúdo padrão de `Code.gs` e cole o código abaixo:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pre-cadastro');

  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: 'invalid_json' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var name = (data.name || '').toString().trim();
  var email = (data.email || '').toString().trim();

  if (!name || !email) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: 'missing_fields' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([new Date(), name, email]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

> Se você renomeou a aba para outro nome, troque `'Pre-cadastro'` pelo nome usado.

3. Salve o projeto (ícone de disquete, ou `Ctrl+S`). Dê um nome ao projeto, ex.
   `Orkestra - Pre-cadastro`.

## 3. Publique como Web App

1. Clique em **Implantar → Nova implantação**.
2. Em "Selecionar tipo", clique no ícone de engrenagem e escolha **App da Web**.
3. Configure:
   - **Executar como:** Eu (sua conta)
   - **Quem pode acessar:** Qualquer pessoa
4. Clique em **Implantar**.
5. A primeira vez vai pedir autorização — autorize com sua conta Google
   (vai aparecer um aviso de "app não verificado", é esperado para scripts
   pessoais; clique em "Avançado" → "Acessar [nome do projeto] (não seguro)").
6. Copie a **URL do app da Web** gerada. Algo como:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Configure o frontend

1. Na raiz do projeto `Landing-Page-Miranda-Labs`, copie `.env.example` para `.env`:

   ```bash
   cp .env.example .env
   ```

2. Cole a URL copiada no passo anterior:

   ```
   VITE_ORKESTRA_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

3. Reinicie o `npm run dev` (ou rode `npm run build`) para a variável ser
   carregada — variáveis `VITE_*` só são lidas no build/start do Vite.

4. No GitHub Pages (deploy via Actions), adicione a mesma variável como
   **secret/variable** do repositório (`VITE_ORKESTRA_SHEET_WEBHOOK_URL`) e
   exporte-a no step de build do workflow `.github/workflows/static.yml`,
   por exemplo:

   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_ORKESTRA_SHEET_WEBHOOK_URL: ${{ secrets.VITE_ORKESTRA_SHEET_WEBHOOK_URL }}
   ```

## 5. Teste

1. Acesse `/projetos/orkestra` no site.
2. Preencha nome e e-mail na seção "Pré-cadastro" e envie.
3. Confirme que uma nova linha apareceu na planilha (`Data/Hora`, `Nome`, `E-mail`).

## Notas técnicas

- O frontend usa `fetch(..., { mode: 'no-cors' })` porque o Apps Script não
  responde cabeçalhos CORS de forma confiável. Nesse modo a resposta é opaca
  (não dá para ler o corpo/status), então o frontend trata "requisição não
  lançou erro de rede" como sucesso.
- Há um campo honeypot oculto (`company`) no formulário: se vier preenchido,
  o envio é descartado silenciosamente (indício de bot).
- Sem a variável `VITE_ORKESTRA_SHEET_WEBHOOK_URL` configurada, a seção
  continua visível, mas o envio mostra a mensagem "Pré-cadastro indisponível
  no momento" — a página não quebra.
- Se precisar reimplantar o script após editar o código, use **Implantar →
  Gerenciar implantações → editar (lápis) → Nova versão** para que a URL
  publicada use a versão atualizada.
