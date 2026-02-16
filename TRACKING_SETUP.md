# Guia de Configuração de Rastreamento (Pixel, GA4, UTMfy)

Este guia ajuda você a configurar os IDs de rastreamento no seu projeto.

## 1. Onde colocar os IDs?

Abra o arquivo: `web/components/analytics/analytics-provider.tsx`

Você verá estas linhas no topo do arquivo:

```typescript
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"; // Seu ID do Google Analytics
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "XXXXXXXXXXXXXXXX"; // Seu ID do Pixel do Facebook
```

Você pode substituir `"G-XXXXXXXXXX"` e `"XXXXXXXXXXXXXXXX"` diretamente pelos seus códigos real, ou (recomendado) criar um arquivo `.env.local` na pasta `web` com o seguinte conteúdo:

```
NEXT_PUBLIC_GA_ID=G-SEU-CODIGO-AQUI
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
```

## 2. Como pegar os IDs?

### Facebook Pixel (Meta Ads)
1. Acesse o [Gerenciador de Eventos do Meta](https://business.facebook.com/events_manager2).
2. Conecte uma fonte de dados (Web).
3. Copie o **ID do Dataset** (geralmente um número longo).
4. Cole no lugar de `FB_PIXEL_ID`.

### Google Analytics 4 (GA4)
1. Acesse o [Google Analytics](https://analytics.google.com/).
2. Vá em **Administrador** > **Fluxos de Dados**.
3. Clique no fluxo do seu site (ou crie um novo).
4. Copie o **ID da Métrica** (começa com `G-`).
5. Cole no lugar de `GA_TRACKING_ID`.

### UTMfy
O script do UTMfy já está instalado automaticamente em todas as páginas via `AnalyticsWrapper`.
Ele serve para garantir que os parâmetros de URL (como `?utm_source=facebook`) não se percam quando o usuário navega pelo site e sejam passados corretamente para a Kiwify.

#### Passos no Painel do UTMfy:
1. Acesse o [Painel do UTMfy](https://app.utmify.com.br/).
2. Vá em **Configurações** > **Domínios**.
3. Adicione o domínio do seu site (ex: `protocoloneurobaby.com.br`).
4. Em **Integrações**, conecte sua conta da **Kiwify** usando o Webhook fornecido pelo UTMfy.

#### Links de Checkout:
Para o UTMfy funcionar perfeitamente, os botões de compra precisam apontar para o link real da Kiwify (ex: `https://pay.kiwify.com.br/...`).
Atualmente eles estão como `#checkout-master`. Você deve editá-los no arquivo `web/components/landing/pricing.tsx`.

### 3. O que está sendo rastreado?

1. **Page View**: Visualização de página (automático no GA4 e Facebook).
2. **Initiate Checkout**: Quando o usuário clica nos botões de compra ("Quero o Plano...").
   - Valor: R$ 27,00 (Plano Completo) ou R$ 10,00 (Plano Básico).
   - O evento envia o valor e o nome do produto para o Facebook/Google.

## 4. Próximos Passos (Kiwify)

Para rastrear a **COMPRA REAL (Purchase)**, você precisa configurar o Pixel **dentro da Kiwify**, pois a compra acontece lá.

1. Na Kiwify, vá no seu produto > Configurações > Pixels.
2. Adicione o mesmo ID do Facebook Pixel e Google Analytics que você usou aqui.
3. Isso garantirá que quando a pessoa pagar, a Kiwify avise o Facebook/Google.

**Resumo:**
- **Site (Aqui):** Rastreia quem visitou e quem clicou para comprar.
- **Kiwify:** Rastreia quem realmente pagou.
