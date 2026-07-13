# Next.js 16 Starter (RIVER)

Boilerplate frontend sẵn để clone và dựng project mới. Không phải app production — chỉ là khung chuẩn: i18n, fetch CMS, SEO Rank Math, form, UI base.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** + shadcn/ui (Radix)
- **next-intl** — đa ngôn ngữ (`vi` / `en`)
- **GSAP** — scroll / animation helpers
- **react-hook-form** + **zod** — form validation
- ESLint + Prettier
- `output: 'standalone'` — sẵn cho Docker / VPS

## Quick start

```bash
# clone
git clone <repo-url> my-project
cd my-project

# install (pnpm khuyến nghị)
pnpm install

# env — tạo .env.local (xem mục Environment)

# run
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Environment

Tạo file `.env.local` ở root:

```env
NEXT_PUBLIC_DOMAIN=https://example.com
NEXT_PUBLIC_CMS=https://cms.example.com
NEXT_PUBLIC_API=https://cms.example.com/wp-json
```

| Biến                 | Mục đích                           |
| -------------------- | ---------------------------------- |
| `NEXT_PUBLIC_DOMAIN` | Domain site (SEO / schema rewrite) |
| `NEXT_PUBLIC_CMS`    | URL WordPress / CMS                |
| `NEXT_PUBLIC_API`    | Base REST API                      |

## Scripts

```bash
pnpm dev              # development
pnpm build            # lint + format + production build
pnpm start            # chạy bản build
pnpm lint             # eslint
pnpm lint:fix        # eslint --fix
pnpm format           # prettier --write
pnpm format:check     # prettier --check

# phân tích bundle
ANALYZE=true pnpm build
```

## Cấu trúc

```text
src/
  app/                 # App Router ([locale], layouts, robots)
  components/          # UI / shared components
  configs/             # env, routes, endpoints
  fetches/             # fetch CMS, Rank Math, CF7
  i18n/                # next-intl routing / request / navigation
  lib/                 # utils (cn, …)
  services/            # service layer (cloud, …)
  utils/               # helpers (scroll, metadata, …)
  proxy.ts             # next-intl middleware (Next 16)
messages/              # vi.json, en.json
public/                # static assets
```

## Có sẵn trong starter

- Routing theo locale: `/` (vi mặc định), `/en`, …
- Fetch wrapper + Rank Math metadata / schema helpers
- Contact Form 7 request helper
- Scroll helpers (window + container) bằng GSAP
- ESLint flat config + Prettier
- Bundle analyzer (`@next/bundle-analyzer`)

## Checklist khi clone project mới

1. Đổi `name` trong `package.json`
2. Cập nhật `.env.local` (DOMAIN / CMS / API)
3. Chỉnh `src/i18n/routing.ts` nếu thêm/bớt locale
4. Cập nhật `src/configs/endpoints.ts` và `routes.ts` theo CMS
5. Thay nội dung `messages/*.json`
6. Xóa page demo (`abc`, `bcd`, …) nếu không cần
7. Review `next.config.ts` (`typescript.ignoreBuildErrors`, `remotePatterns`, …) trước khi lên production

## Ghi chú

- Package manager: **pnpm** (có `pnpm-lock.yaml`)
- Path alias: `@/*` → `src/*`
- Strict Mode đang tắt trong `next.config.ts` (tiện GSAP / animation)
