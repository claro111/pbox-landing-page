# PBOX Creative Advertising - Landing Page

A modern, production-ready React landing page for PBOX Creative Advertising agency. Built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design with red/white/black color scheme
- ⚡ Fast development with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first responsive layout (mobile, tablet, desktop)
- ♿ Accessible with semantic HTML and ARIA labels
- 🎯 SEO-friendly structure with proper heading hierarchy
- 🧩 Reusable component architecture
- ✅ Comprehensive test coverage with unit and property-based tests
- 🎯 Form validation with real-time feedback
- 🔄 Smooth scroll navigation
- 🎨 Consistent design system with TailwindCSS
- 📊 Project filtering with smooth animations

## Tech Stack

### Core Technologies

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

### Development Tools

- **Testing**: Vitest 4 with Testing Library
- **Linting**: ESLint 9
- **Formatting**: Prettier 3
- **Type Checking**: TypeScript 5.9

## Project Structure

```
pbox-landing-page/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx       # Button component with variants
│   │   ├── Card.tsx         # Card component with hover effects
│   │   ├── Input.tsx        # Form input with validation
│   │   ├── Logo.tsx         # PBOX logo component
│   │   └── index.ts         # Component exports
│   ├── sections/            # Page sections
│   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── Services.tsx     # Services grid
│   │   ├── Projects.tsx     # Filterable projects gallery
│   │   ├── About.tsx        # About section
│   │   ├── Equipment.tsx    # Equipment showcase
│   │   ├── Testimonial.tsx  # Client testimonial
│   │   ├── Contact.tsx      # Contact form
│   │   ├── CTABanner.tsx    # Call-to-action banner
│   │   ├── Footer.tsx       # Footer with links
│   │   └── index.ts         # Section exports
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollSpy.js  # Track active section
│   │   ├── useInView.js     # Viewport intersection detection
│   │   └── useMobileMenu.js # Mobile menu state management
│   ├── utils/               # Utility functions
│   │   ├── constants.js     # App constants and data
│   │   ├── validation.js    # Form validation utilities
│   │   └── scroll.js        # Smooth scroll utilities
│   ├── test/                # Test files
│   │   ├── setup.ts         # Test setup configuration
│   │   ├── animations.test.tsx
│   │   └── responsive.test.tsx
│   ├── assets/              # Static assets
│   │   └── images/          # Image files
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── public/                  # Public static files
├── .kiro/                   # Kiro specs and documentation
│   └── specs/
│       └── pbox-landing-page/
│           ├── requirements.md
│           ├── design.md
│           └── tasks.md
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd pbox-landing-page
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Code Quality

Run ESLint:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format
```

### Testing

Run all tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with UI:

```bash
npm run test:ui
```

## Website Sections

1. **Navbar** - Sticky navigation with mobile menu
2. **Hero** - Main landing section with CTAs
3. **Services** - Three service offerings
4. **Projects** - Filterable portfolio gallery
5. **About** - Company information
6. **Equipment** - Machines showcase
7. **Testimonial** - Client feedback
8. **Contact** - Contact form and information
9. **CTA Banner** - Call-to-action section
10. **Footer** - Links and social media

## Design System

### Colors

- Primary Red: `#E10600`
- Dark Gray: `#1F2937`
- Light Gray: `#F3F4F6`
- Black: `#111827`
- White: `#FFFFFF`

### Typography

- Font Family: Inter
- Heading weights: 700-900
- Body weights: 400-600

### Spacing

- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl`

## Development Guidelines

### Component Development

1. **Use TypeScript**: All components should be typed with proper interfaces
2. **Follow naming conventions**: PascalCase for components, camelCase for functions
3. **Keep components focused**: Each component should have a single responsibility
4. **Use composition**: Build complex UIs by composing smaller components
5. **Avoid inline styles**: Use TailwindCSS utility classes exclusively

### Styling Guidelines

1. **Mobile-first approach**: Start with mobile styles, add breakpoints for larger screens
2. **Use Tailwind utilities**: Avoid custom CSS when possible
3. **Consistent spacing**: Use Tailwind spacing scale (4, 8, 16, 24, etc.)
4. **Color consistency**: Use defined color palette from design system
5. **Responsive breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

### Animation Guidelines

1. **Use Framer Motion**: For complex animations and transitions
2. **Respect reduced motion**: Check `prefers-reduced-motion` preference
3. **Keep animations subtle**: Avoid distracting or excessive animations
4. **Performance first**: Use transform and opacity for smooth animations
5. **Consistent timing**: Use standard durations (300ms for quick, 600ms for smooth)

### Accessibility Guidelines

1. **Semantic HTML**: Use appropriate HTML5 elements (header, nav, main, section, footer)
2. **ARIA labels**: Add labels to icon buttons and interactive elements
3. **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
4. **Alt text**: Provide descriptive alt text for all images
5. **Heading hierarchy**: Follow proper h1 → h2 → h3 structure
6. **Focus indicators**: Ensure visible focus states for keyboard users

### Testing Guidelines

1. **Test user interactions**: Focus on how users interact with components
2. **Test accessibility**: Verify ARIA labels and semantic HTML
3. **Test responsive behavior**: Verify layouts adapt to different screen sizes
4. **Test form validation**: Verify validation logic and error messages
5. **Test animations**: Verify entrance and interaction animations work correctly

### Code Quality Standards

1. **Run linter before commit**: Fix all ESLint warnings and errors
2. **Format code**: Use Prettier to maintain consistent formatting
3. **Type safety**: Avoid `any` types, use proper TypeScript types
4. **No console logs**: Remove debug console.log statements before commit
5. **Comment complex logic**: Add JSDoc comments for non-obvious code
6. **No placeholder content**: Use realistic content, no lorem ipsum

## Performance Optimization

- **Code splitting**: Vite automatically splits code for optimal loading
- **Image optimization**: Use WebP format and lazy loading where appropriate
- **Bundle analysis**: Run `npm run build` to analyze bundle size
- **Lighthouse scores**: Target 90+ for Performance, Accessibility, Best Practices, SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Development server won't start

- Ensure Node.js version is 20.19+ or 22.12+
- Delete `node_modules` and run `npm install` again
- Check if port 5173 is already in use

### Build fails

- Run `npm run lint` to check for linting errors
- Ensure all TypeScript errors are resolved
- Check for missing dependencies

### Tests fail

- Ensure all dependencies are installed
- Check test setup in `src/test/setup.ts`
- Run tests in watch mode to debug: `npm run test:watch`

## License

Private - PBOX Creative Advertising

## Contact

For questions or support, contact: hello@pboxcreative.com
