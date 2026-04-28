# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Prableen Singh, a Full Stack Developer. Built with React 18, Vite, Tailwind CSS, and Material-UI icons.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

**Stack:** React 18 + Vite + Tailwind CSS + Flowbite + Material-UI Icons

**Structure:**
- `src/App.jsx` - Main app component with section-based layout (Hero, About, Work, Projects, Contact)
- `src/components/` - All UI components organized by feature folder
- `src/index.css` - Global styles with Tailwind directives and custom animations (`.animated-gradient`)
- `index.html` - Contains SEO metadata, Open Graph, and Twitter card configuration

**Styling:**
- Tailwind CSS for utility classes with Flowbite plugin
- Custom gradient animation in `index.css`
- Dark theme by default (`#121212` background)
- Fira Code font family

**Key Configuration:**
- `vite.config.js` - React plugin
- `tailwind.config.js` - Flowbite integration, content paths
- `postcss.config.js` - Tailwind and Autoprefixer

**Components:**
- `NavBar` - Responsive navigation with mobile menu toggle
- `HeroSection` - Animated gradient heading
- `AboutSection` - Skills display (Frontend, Backend, Languages/Tools)
- `Work` - Experience timeline with responsive grid
- `Projects` - Three featured projects with hover-reveal links
- `Contact` - Email and phone contact cards
- `Footer` - Site navigation links
- `Socials` - LinkedIn and GitHub buttons
