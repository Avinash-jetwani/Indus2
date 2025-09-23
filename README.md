# Indus2 - IT Services Company Website

A modern, responsive one-page website for Indus2, showcasing IT services including mobile development, web development, cloud services, DevOps, AI & ML, and cybersecurity.

## Features

- **Modern Design**: Clean, professional UI with glass morphism effects
- **Responsive**: Works perfectly on all devices and screen sizes
- **Animated**: Smooth animations and interactive elements
- **Fast**: Built with React + Vite for optimal performance
- **Type Safe**: Full TypeScript implementation

## Tech Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 4.5.3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Custom CSS (no framework dependencies)
- **Smooth Scrolling**: React Scroll

## Sections

1. **Hero** - Main landing with animated background effects
2. **Services** - IT services offered (Mobile, Web, Cloud, DevOps, AI/ML, Cybersecurity)
3. **About** - Company information and values
4. **Technologies** - Tech stack with interactive filters
5. **Testimonials** - Client feedback slider
6. **Contact** - Contact information and office hours
7. **Footer** - Company details and contact info

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contact Information

- **Email**: support@indus2.tech
- **Phone**: +919879060420 / +971564870723
- **Website**: Available at localhost:5173 during development

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── SectionTitle.tsx
│   └── sections/        # Page sections
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Technologies.tsx
│       └── Testimonials.tsx
├── data/
│   └── content.ts       # All website content
├── types/
│   └── index.ts         # TypeScript interfaces
├── App.tsx              # Main app component
├── index.css            # Global styles
└── main.tsx             # App entry point
```

## License

© 2025 Indus2. All rights reserved.