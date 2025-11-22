# Slumber - Frontend Mockup App

## Project Context
This is a high-fidelity mockup of a sleep tracking app. **No backend or database** - use mock data, localStorage, or in-memory state. Focus on interactive UI/UX with hardcoded functionality.

## Commands
- `bun dev` - Start development server
- `bun build` - Build production bundle
- `bun lint` - Run ESLint on all files
- `bun lint --fix` - Auto-fix linting issues

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript (strict mode)
- Styling: Tailwind CSS 4, shadcn/ui components
- Icons: lucide-react, Charts: recharts, Dates: date-fns

## Code Style
- **Imports**: Use `@/*` path alias for absolute imports
- **Components**: Functional components with TypeScript, use `"use client"` for interactive components
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files
- **Mock Data**: Store in `lib/mock-data.ts`, use seeded random for consistent SSR/client rendering
- **State**: Use React hooks, localStorage for persistence (no backend calls)
- **Types**: Define in `lib/types.ts`, strict typing required
- **Styling**: Use `cn()` utility from `lib/utils.ts` for conditional classes
- **Error Handling**: Graceful UI degradation, no try-catch unless necessary (mock data won't fail)
