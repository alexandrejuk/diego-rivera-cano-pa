# Diego Rivera Cano — site institucional

Site da banca **Rivera Cano** (Panamá): landing com serviços jurídicos, métricas, FAQ, contacto/WhatsApp e página de **notícias** agregadas a partir de feeds RSS. Interface em **três idiomas** (espanhol, inglês e português).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) · React 19 · TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Lucide React](https://lucide.dev) (ícones)
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) (parse de RSS na API de notícias)

## Requisitos

- Node.js 20+ (recomendado)
- Yarn, npm, pnpm ou bun

## Como executar

```bash
# instalar dependências
yarn install

# servidor de desenvolvimento (http://localhost:3000)
yarn dev

# produção
yarn build
yarn start

# lint
yarn lint
```

A raiz `/` redireciona para o idioma predefinido em `lib/i18n.ts` (`defaultLocale`, hoje `es`). As páginas públicas vivem em `/[locale]`, por exemplo `/es`, `/en`, `/pt`.

## Estrutura útil

| Caminho | Descrição |
|--------|-----------|
| `app/[locale]/page.tsx` | Home: ordem das secções da landing |
| `app/[locale]/layout.tsx` | Layout com navbar, fundo e footer |
| `app/[locale]/noticias/` | Listagem de notícias (cliente + dados da API) |
| `app/api/news/route.ts` | `GET` — agrega e devolve notícias (query `limit`, até 50) |
| `components/landing/` | Secções da landing (hero, serviços, FAQ, etc.) |
| `components/landing/NavbarMobileNav.tsx` | Menu móvel (portal + `document.body`) |
| `lib/i18n.ts` | Mensagens, tipo `SiteMessages`, `locales` e `defaultLocale` |
| `lib/news.ts` | Fontes RSS, normalização e agregação |
| `public/` | Imagens estáticas (logo, hero, bandeiras, etc.) |

## Traduções e conteúdo

Todo o texto orientado ao utilizador passa por **`lib/i18n.ts`**: objeto `messages` com chaves `en`, `es` e `pt`. Ao adicionar uma nova chave, atualize o tipo **`SiteMessages`** no topo do mesmo ficheiro para o TypeScript validar os três idiomas.

## API de notícias

- **Endpoint:** `GET /api/news?limit=30`
- **Resposta:** JSON com itens agregados (título, link, fonte, datas, resumo, imagem quando existir).
- As fontes estão definidas em **`lib/news.ts`** (`feedSources`). A rota corre em runtime Node e contacta os URLs externos em cada pedido (útil ter rede no deploy).

## Deploy

Compatível com qualquer alojamento Node (Vercel, Railway, Docker, etc.). Defina `NODE_ENV=production`, execute `yarn build` e sirva com `yarn start` (ou o comando equivalente da plataforma).

## Documentação Next.js

Este projeto segue convenções do Next.js 16; há alterações face a versões antigas — consulte a documentação oficial em [nextjs.org/docs](https://nextjs.org/docs) quando necessário.
