# Slumber - Sleep Tracking App

A modern, mobile-first sleep tracking application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### Complete User Flow (12 Screens)

1. **Welcome Screen** - Landing page with branding and CTAs
2. **Onboarding (2 screens)** - Feature highlights and app introduction
3. **Authentication** - Login and Sign Up flows with Google OAuth placeholder
4. **Sleep Profile Quiz** - Personalized setup with bedtime preferences and sleep issues
5. **Home Dashboard** - Sleep score, stats cards, and quick access to tracking
6. **Sleep Tracking** - Active sleep session with live timer
7. **Morning Check-in** - Mood selection, quality rating, and notes
8. **Sleep Insights** - Weekly/monthly/yearly analytics with bar charts
9. **Set Sleep Goals** - Customizable sleep targets and schedules
10. **Profile/Settings** - User account management and preferences

### Design System

- **Color Palette**:
  - Primary: Indigo (#6366f1) - calm, sleep-inducing color
  - Warm Accents: Gold (#d4a574) and Sunset (#e8956f)
  - Background: Slate 200 (#E2E8F0) light mode, Dark Slate (#0f172a) dark mode
  - Follows sleep science principles - no harsh blues, calming tones
- **Typography**: Geist font family (modern sans-serif)
- **Components**: Custom shadcn/ui components with consistent styling
- **Layout**: Mobile-only (max-width 393px) - optimized for phone screens
- **Accessibility**: 44px minimum touch targets, proper contrast ratios

## Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (custom implementation)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm/yarn/bun

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun build

# Start production server
bun start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
slumber/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Welcome screen
│   ├── layout.tsx           # Root layout
│   ├── onboarding/          # Onboarding flow
│   ├── login/               # Login page
│   ├── signup/              # Sign up page
│   ├── dashboard/           # Main dashboard
│   ├── track/               # Sleep tracking
│   ├── checkin/             # Morning check-in
│   ├── insights/            # Analytics
│   ├── goals/               # Goal setting
│   └── profile/             # User profile
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── slider.tsx
│   │   ├── switch.tsx
│   │   └── ...
│   ├── layout/              # Layout components
│   │   ├── status-bar.tsx
│   │   ├── bottom-nav.tsx
│   │   └── page-container.tsx
│   └── features/            # Feature-specific components
│       ├── circular-progress.tsx
│       ├── sleep-bar-chart.tsx
│       ├── emoji-selector.tsx
│       ├── sleep-timer.tsx
│       └── moon-logo.tsx
├── lib/
│   ├── utils.ts             # Utility functions
│   ├── types.ts             # TypeScript types
│   └── mock-data.ts         # Mock data for prototype
└── public/                  # Static assets
```

## Key Features Implemented

### UI/UX
- ✅ Brand color palette: Indigo primary with warm gold/sunset accents
- ✅ Crescent moon with stars logo (from Figma branding)
- ✅ Mobile-only design (constrained to 393px max width)
- ✅ Contextual headings and microcopy added to all screens
- ✅ Smooth animations and transitions
- ✅ Accessible touch targets (44x44px minimum)
- ✅ Sleep science-informed colors (blue-light friendly)

### Functionality
- ✅ Complete onboarding flow
- ✅ Form validation on auth screens
- ✅ Sleep tracking with timer
- ✅ Morning check-in with emoji mood selector
- ✅ Weekly sleep insights with bar charts
- ✅ Customizable sleep goals
- ✅ Bottom navigation with active states
- ✅ Mock data for all features

### Components
- ✅ Custom Button, Card, Input, Slider, Switch, Checkbox components
- ✅ Circular progress indicator for sleep scores
- ✅ Bar chart for weekly sleep patterns
- ✅ Emoji selector for mood tracking
- ✅ Live sleep timer
- ✅ Responsive bottom navigation

## Mock Data

The app uses mock data for demonstration purposes:
- 30 days of sleep session history
- Average sleep stats
- Weekly chart data
- User profile information

## Development Notes

### Added Contextual Text (Per Requirements)

All screens now include descriptive headings and microcopy:

- **Welcome**: "Track your sleep, build better habits, and wake up refreshed every day"
- **Dashboard**: "Tonight's Session" section with "Track tonight's sleep when you're ready for bed"
- **Onboarding**: Feature explanations and benefits
- **Sleep Profile**: "Let's Personalize Your Sleep" with guidance
- **Tracking**: "Sleep Tracking Active" with "Time elapsed"
- **Check-in**: "How Did You Sleep?" with mood prompts
- **Goals**: "Set your target to build better habits"
- **All CTAs**: Supporting microcopy explaining next steps

### Color System (From Figma Branding Template)

Implemented the official brand color palette:
- **Primary**: Indigo (#6366f1) - universally calming, sleep-associated color
- **Warm Accents**: Gold (#d4a574) and Sunset (#e8956f) - warmth and comfort
- **Backgrounds**: Slate 200 (#E2E8F0) light, Dark Slate (#0f172a) dark
- **Neutral Tones**: Slate 400-700 for borders, muted elements
- **Status Colors**: Success Green (#10b981), Warning Orange (#f59e0b), Error Red (#ef4444)

The palette avoids bright energizing colors and uses indigo instead of harsh blue to support melatonin production and reduce eye strain during evening use.

## Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication with NextAuth
- [ ] Database persistence (PostgreSQL)
- [ ] Push notifications for bedtime reminders
- [ ] Wind-down routine builder
- [ ] Sleep trends and insights AI
- [ ] Social features (optional)
- [ ] Dark mode toggle (UI ready)

## License

MIT

## Credits

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
