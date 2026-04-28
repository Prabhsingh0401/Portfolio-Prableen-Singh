# AGENTS.md - Portfolio Development Guide

This document provides guidance for AI agents operating in this repository.

---

## 🚨 CRITICAL PROTOCOL: SCRIPT EXECUTION

**DO NOT** independently run build, lint, or test scripts.
- If you believe a script needs to be run to verify a change or check for errors, **you must explicitly ask the user to run it.**
- Your primary responsibility is generating high-quality code, logic, and UI structures.

---

## Project Overview

Personal portfolio website for Prableen Singh, a Full Stack Developer.
- **Stack:** React 18, Vite, Tailwind CSS v3, Flowbite, Material-UI Icons
- **Theme:** Dark theme (`#121212` background), Fira Code font

---

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run lint     # Run ESLint (no test framework configured)
npm run preview  # Preview production build
```

---

## Repository Structure

```
├── src/
│   ├── App.jsx           # Main app component with section layout
│   ├── main.jsx          # App entry point
│   ├── index.css         # Global styles, Tailwind directives, animations
│   ├── App.css           # Component-specific styles
│   ├── components/       # UI components organized by feature folder
│   │   ├── NavBar/       # Responsive navigation with mobile menu
│   │   ├── HeroSection/  # Animated gradient heading
│   │   ├── AboutSection/ # Skills display
│   │   ├── Work/         # Experience timeline
│   │   ├── Projects/     # Featured projects with hover links
│   │   ├── Footer/      # Site navigation links
│   │   ├── socials/     # LinkedIn and GitHub buttons
│   │   └── contactSection/ # Contact cards
│   └── assets/          # Static assets (SVG icons, images)
├── index.html           # SEO metadata, Open Graph, Twitter cards
├── vite.config.js       # Vite + React plugin config
├── tailwind.config.js  # Flowbite integration, content paths
├── postcss.config.js   # Tailwind + Autoprefixer
└── eslint.config.js   # ESLint with React plugins
```

---

## Code Style & Implementation

### 1. No Inline Comments
Code must be self-documenting through clear naming and modular structure. **Do not add comments** unless technically unavoidable.

### 2. Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `QuestionGenerator.tsx` |
| Hooks | camelCase (`use` prefix) | `usePaperState.ts` |
| Files | PascalCase | `NavBar.jsx` |
| CSS | kebab-case | `btn-glass-primary` |

### 3. Imports

**Order:**
1. External libraries (React, MUI, etc.)
2. Internal components
3. CSS/Styles
4. Assets

**Example:**
```jsx
import React from 'react'
import { Box, Typography } from '@mui/material'
import NavBar from './components/NavBar/NavBar'
import './index.css'
```

**Path conventions:**
- Use relative paths with `./` or `../`
- Include file extensions: `.jsx` for React components

### 4. Styling (Tailwind CSS v3)

- Use utility classes from Tailwind CSS
- Custom styles in `index.css` (gradient animations `.animated-gradient`)
- Flowbite components via `flowbite-react`
- All components support dark theme by default
- Use `cn()` utility for conditional classes: `className={cn("base", condition && "active")}`

### 5. Component Structure

```jsx
import React from 'react'
import { Box, Typography } from '@mui/material'
import './ComponentName.css'

function ComponentName({ prop1, prop2 }) {
  return (
    <Box className="component-wrapper">
      <Typography variant="h1">Content</Typography>
    </Box>
  )
}

export default ComponentName
```

### 6. TypeScript & Props
- Use PropTypes for type checking (this is JS project, not TS)
- Define default props for optional properties
- Document complex prop shapes in JSDoc comments when necessary

### 7. Error Handling
- Wrap async operations in try/catch blocks
- Return meaningful error messages
- Display user-friendly error states in UI

---

## ESLint Configuration

The project uses ESLint with these plugins:
- `eslint-plugin-react` - React rules
- `eslint-plugin-react-hooks` - Hooks rules
- `eslint-plugin-react-refresh` - HMR-safe component detection

**Key rules:**
- `react/jsx-no-target-blank`: off
- `react-refresh/only-export-components`: warn (allow constant export)

---

## Key Configuration Files

### tailwind.config.js
- Flowbite plugin enabled
- Content paths for component scanning
- Dark mode class strategy

### postcss.config.js
- Tailwind CSS processor
- Autoprefixer for vendor prefixes

### vite.config.js
- React plugin for Fast Refresh

---

## Workflow Checklist for Agents

- [ ] **Code Generation:** Are components following the existing structure?
- [ ] **Import Order:** Are imports properly organized?
- [ ] **Styling:** Is Tailwind CSS used for utilities?
- [ ] **Naming:** Are files and components named correctly?
- [ ] **ESLint:** Would the code pass linting?
- [ ] **Dark Theme:** Do new components support the dark theme?
- [ ] **Script Check:** Have I asked the user to run scripts?