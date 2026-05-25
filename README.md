# UniRide — Caronas Universitárias

Aplicação web de caronas universitárias desenvolvida com Next.js, TypeScript e shadcn/ui. Gerada via [v0.app](https://v0.app) e hospedada na Vercel.

🌐 **Acesse:** [vercel.com/isacorreafrancisco-1218s-projects/v0-uni-ride-caronas-universitarias](https://vercel.com/isacorreafrancisco-1218s-projects/v0-uni-ride-caronas-universitarias)

---

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar Localmente](#como-rodar-localmente)
- [Deploy](#deploy)

---

## Visão Geral

UniRide é uma plataforma voltada para estudantes universitários que desejam compartilhar ou encontrar caronas. O projeto foi prototipado e gerado com o v0.app, utilizando a stack moderna do ecossistema Next.js com componentes acessíveis do shadcn/ui.

---

## Tecnologias Utilizadas

| Tecnologia              | Uso                                                              |
|-------------------------|------------------------------------------------------------------|
| Next.js 16              | Framework React com App Router e suporte a RSC                   |
| React 19                | Biblioteca de interface                                          |
| TypeScript              | Tipagem estática                                                 |
| Tailwind CSS v4         | Estilização utilitária                                           |
| shadcn/ui               | Biblioteca de componentes (estilo New York, baseada em Radix UI) |
| Radix UI                | Primitivos de UI acessíveis                                      |
| Zod                     | Validação de esquemas e formulários                              |
| React Hook Form         | Gerenciamento de formulários                                     |
| Lucide React            | Ícones                                                           |
| Vercel Analytics        | Monitoramento de uso                                             |
| pnpm                    | Gerenciador de pacotes                                           |

---

## Estrutura do Projeto

```
v0-uni-ride-caronas-universitarias/
├── app/                  # Rotas e páginas (Next.js App Router)
│   └── globals.css       # Estilos globais e variáveis CSS
├── components/           # Componentes da aplicação
│   └── ui/               # Componentes shadcn/ui
├── lib/                  # Utilitários e helpers
├── styles/               # Estilos adicionais
├── public/               # Arquivos estáticos
├── components.json       # Configuração do shadcn/ui
├── next.config.mjs       # Configuração do Next.js
├── tailwind.config       # Configuração do Tailwind CSS
├── tsconfig.json         # Configuração do TypeScript
└── package.json          # Dependências e scripts
```

---

## Como Rodar Localmente

**Pré-requisitos:** Node.js 18+ e pnpm instalados.

1. Clone o repositório:

```bash
git clone https://github.com/isabcfrancisco/v0-uni-ride-caronas-universitarias.git
cd v0-uni-ride-caronas-universitarias
```

2. Instale as dependências:

```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`.

---

## Deploy

O projeto é sincronizado automaticamente com a Vercel a partir da branch `main`. Qualquer push aciona um novo deploy.

Para fazer deploy manual via CLI:

```bash
pnpm build
vercel --prod
```

---

*Projeto gerado com [v0.app](https://v0.app) · Hospedado na [Vercel](https://vercel.com)*
