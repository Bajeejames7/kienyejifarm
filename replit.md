# Overview

This is a Kienyeji Fresh Farm website - an e-commerce platform for selling free-range indigenous chicken in Kenya. The application allows customers to browse products, place orders, and contact the farm through WhatsApp integration. It features a modern, responsive design with African-themed styling that showcases farm-fresh chicken products with same-day delivery in Nairobi.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client uses React with TypeScript and is built with Vite for fast development and optimized production builds. The UI is constructed using shadcn/ui components with Radix UI primitives, providing accessible and customizable interface elements. Tailwind CSS handles styling with custom African-themed color variables and responsive design patterns.

The application follows a single-page architecture with Wouter for client-side routing. State management is handled through React hooks and TanStack Query for server state management and data fetching. The component structure is organized into reusable sections (hero, products, about, contact, etc.) that compose the main home page.

Form handling uses React Hook Form with Zod validation schemas shared between client and server. This ensures type safety and consistent validation rules across the application.

## Backend Architecture
The server is built with Express.js using TypeScript and follows a modular route-based architecture. It provides RESTful API endpoints for order submission, contact form handling, and data retrieval. The application uses an in-memory storage implementation (MemStorage) that can be easily swapped for a database-backed solution.

Error handling is centralized with custom middleware that provides consistent error responses and logging. Request/response logging middleware tracks API performance and captures response data for debugging.

## Data Storage
The application is configured for PostgreSQL using Drizzle ORM with Neon Database as the cloud provider. The schema defines three main entities: users, orders, and contacts. Database migrations are managed through Drizzle Kit with configuration pointing to a shared schema file.

Currently, the application uses an in-memory storage implementation for development, but the storage interface is abstracted to allow easy migration to the PostgreSQL database.

## Authentication and Authorization
The application currently implements a basic user schema but doesn't have active authentication flows. The infrastructure is prepared for session-based authentication with cookie management, but the current focus is on the e-commerce functionality without user accounts.

## Styling and Design System
The design implements a custom African-themed color palette with earth tones (oranges, browns, golds) that reflect the natural, organic nature of the farm products. The styling uses CSS custom properties for consistent theming with both light and dark mode support.

The component library is based on shadcn/ui, providing a comprehensive set of accessible UI components. Typography uses Inter font family for modern readability across all devices.

## Business Logic
The application focuses on three main customer interactions:
1. Product browsing with detailed information about live and processed chicken options
2. Order placement with delivery scheduling and special requests
3. Direct contact through WhatsApp integration for immediate customer service

The pricing structure is transparent with weight-based calculations and bulk order discounts for restaurants and hotels.

# External Dependencies

## Database Services
- **Neon Database**: Cloud PostgreSQL provider for production data storage
- **Drizzle ORM**: Type-safe database toolkit for schema management and queries
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Communication Services
- **WhatsApp Business**: Primary customer communication channel for orders and support
- **WhatsApp Web API**: Integrated for direct messaging from the website

## Frontend Libraries
- **Radix UI**: Headless component library for accessible UI primitives
- **TanStack Query**: Server state management and data synchronization
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form handling with performance optimization
- **Zod**: Schema validation for type-safe data handling

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **Tailwind CSS**: Utility-first styling framework
- **PostCSS**: CSS processing and optimization

## Cloud Infrastructure
- **Replit**: Development and hosting environment with integrated deployment
- **Unsplash**: High-quality stock photography for farm and food imagery

## Image and Media
The application uses Unsplash for professional farm and food photography, with images optimized for web performance and SEO. All images include proper alt text for accessibility.

## Analytics and SEO
The application includes comprehensive meta tags for social media sharing (Open Graph) and search engine optimization. The site structure is designed for fast loading and mobile responsiveness.