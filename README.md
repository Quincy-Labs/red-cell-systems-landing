# Red Cell Systems

Premium marketing site for Red Cell Systems — an AI-native biomedical intelligence company.

## Stack

- [Bun](https://bun.sh)
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui patterns (CVA, `cn` utility)
- Lucide Icons

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `bun run dev`  | Start dev server     |
| `bun run build`| Production build     |
| `bun run start`| Start production     |
| `bun run lint` | Run ESLint           |

## Project structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── navigation/   # Navbar
│   ├── hero/         # Hero section
│   ├── sections/     # Page sections
│   ├── footer/       # Footer
│   └── ui/           # Reusable UI primitives
└── lib/              # Utilities
public/
└── rcs-logo.png          # Official brand mark — updated logo (do not alter)
```

## Design system

Colors, typography, and motion are derived from the official Red Cell Systems logo. See `src/app/globals.css` for design tokens.

**Fonts:** Cormorant Garamond (headlines), Geist (body)

**Brand colors:** Bone `#FAF8F5`, Blood `#9B111E`, Charcoal `#111111`, Warm Gray `#E8E3DC`
