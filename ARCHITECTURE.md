# Project Architecture

This document describes the reorganized architecture of the PBOX Landing Page project.

## Overview

The project has been reorganized into a feature-based architecture for better scalability, maintainability, and code organization. This structure groups related code by domain/feature rather than by technical type.

## Directory Structure

```
src/
├── features/              # Feature-based modules (domain-driven)
│   ├── navigation/        # Navigation bar and mobile menu
│   │   ├── Navbar.tsx
│   │   └── index.ts
│   ├── hero/             # Hero section
│   │   ├── Hero.tsx
│   │   └── index.ts
│   ├── stats/            # Statistics section
│   │   ├── Stats.tsx
│   │   └── index.ts
│   ├── brand/            # Brand transformation section
│   │   ├── BrandTransform.tsx
│   │   └── index.ts
│   ├── services/         # Services section
│   │   ├── Services.tsx
│   │   └── index.ts
│   ├── portfolio/        # Projects/portfolio section
│   │   ├── Projects.tsx
│   │   └── index.ts
│   ├── clients/          # Clients section
│   │   ├── Clients.tsx
│   │   └── index.ts
│   ├── about/            # About section
│   │   ├── About.tsx
│   │   └── index.ts
│   ├── equipment/        # Equipment showcase
│   │   ├── Equipment.tsx
│   │   └── index.ts
│   ├── testimonial/      # Testimonial section
│   │   ├── Testimonial.tsx
│   │   └── index.ts
│   ├── contact/          # Contact form and info
│   │   ├── Contact.tsx
│   │   └── index.ts
│   ├── cta/              # Call-to-action banner
│   │   ├── CTABanner.tsx
│   │   └── index.ts
│   ├── footer/           # Footer section
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── index.ts          # Central feature exports
│
├── shared/               # Shared/reusable code
│   ├── components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Logo.tsx
│   │   └── index.ts
│   ├── hooks/            # Custom React hooks
│   │   ├── useInView.js
│   │   ├── useInView.d.ts
│   │   ├── useScrollSpy.js
│   │   ├── useScrollSpy.d.ts
│   │   ├── useMobileMenu.js
│   │   ├── useMobileMenu.d.ts
│   │   └── index.ts
│   ├── utils/            # Utility functions
│   │   ├── constants.js
│   │   ├── constants.d.ts
│   │   ├── validation.js
│   │   ├── validation.d.ts
│   │   ├── scroll.js
│   │   ├── scroll.d.ts
│   │   ├── motion.ts
│   │   └── index.ts
│   └── types/            # TypeScript type definitions
│       └── index.ts
│
├── assets/               # Static assets (images, icons, etc.)
│   └── images/
│
├── test/                 # Test files
│   ├── setup.ts
│   ├── animations.test.tsx
│   ├── responsive.test.tsx
│   └── responsive-helpers.ts
│
├── App.tsx               # Main application component
├── App.css               # Application styles
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## Architecture Principles

### 1. Feature-Based Organization

Each feature is self-contained in its own directory under `features/`. This approach:
- **Improves discoverability**: Related code is co-located
- **Enables scalability**: Easy to add new features without cluttering
- **Facilitates team collaboration**: Different developers can work on different features
- **Simplifies testing**: Each feature can be tested in isolation

### 2. Shared Resources

Common code that's used across multiple features lives in `shared/`:
- **Components**: Reusable UI elements (Button, Card, Input, Logo)
- **Hooks**: Custom React hooks for shared logic
- **Utils**: Utility functions and constants
- **Types**: TypeScript interfaces and types

### 3. Clear Import Paths

Each directory has an `index.ts` file that exports its public API:

```typescript
// Import from features
import { Navbar, Hero, Services } from './features'

// Import from shared components
import { Button, Card } from './shared/components'

// Import from shared hooks
import { useInView, useScrollSpy } from './shared/hooks'

// Import from shared utils
import { validateEmail, scrollToSection } from './shared/utils'

// Import types
import type { Project, Service } from './shared/types'
```

## Benefits of This Architecture

### Scalability
- Easy to add new features without affecting existing code
- Clear boundaries between different parts of the application
- Reduced risk of circular dependencies

### Maintainability
- Related code is grouped together
- Easy to find and modify feature-specific code
- Clear separation between feature code and shared code

### Testability
- Features can be tested in isolation
- Shared utilities are easily testable
- Clear dependencies make mocking easier

### Developer Experience
- Intuitive file organization
- Consistent import patterns
- Easy onboarding for new developers

## Migration Guide

### Old Import Pattern
```typescript
// Before
import { Button } from './components'
import { Navbar } from './sections'
import { useInView } from './hooks/useInView'
import { validateEmail } from './utils/validation'
```

### New Import Pattern
```typescript
// After
import { Button } from './shared/components'
import { Navbar } from './features/navigation'
import { useInView } from './shared/hooks'
import { validateEmail } from './shared/utils'
```

### Centralized Imports
```typescript
// Even better - use centralized exports
import { Navbar, Hero, Services } from './features'
import { Button, Card, Input } from './shared/components'
import { useInView, useScrollSpy } from './shared/hooks'
```

## Adding New Features

To add a new feature:

1. Create a new directory under `features/`:
   ```
   src/features/new-feature/
   ```

2. Add your component(s):
   ```typescript
   // NewFeature.tsx
   export default function NewFeature() {
     // Component code
   }
   ```

3. Create an index file:
   ```typescript
   // index.ts
   export { default as NewFeature } from './NewFeature'
   ```

4. Export from main features index:
   ```typescript
   // features/index.ts
   export { NewFeature } from './new-feature'
   ```

5. Use in App.tsx:
   ```typescript
   import { NewFeature } from './features'
   ```

## Adding Shared Components

To add a new shared component:

1. Create the component in `shared/components/`:
   ```typescript
   // NewComponent.tsx
   export default function NewComponent() {
     // Component code
   }
   ```

2. Export from components index:
   ```typescript
   // shared/components/index.ts
   export { default as NewComponent } from './NewComponent'
   ```

3. Use anywhere:
   ```typescript
   import { NewComponent } from './shared/components'
   ```

## Best Practices

1. **Keep features independent**: Features should not import from other features
2. **Use shared code**: If code is used by multiple features, move it to `shared/`
3. **Type everything**: Use TypeScript types from `shared/types`
4. **Export through index files**: Always export through index.ts for clean imports
5. **Co-locate related code**: Keep feature-specific code within the feature directory

## Future Enhancements

Potential improvements to consider:

1. **Feature-specific hooks**: Move feature-specific hooks into their feature directories
2. **Feature-specific types**: Create types.ts files within features for feature-specific types
3. **Lazy loading**: Implement code splitting for features to improve initial load time
4. **Storybook integration**: Add Storybook for component documentation
5. **API layer**: Add a `services/` directory for API calls when backend is integrated

## Questions?

For questions about this architecture or suggestions for improvements, please reach out to the development team.
