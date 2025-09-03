# Overview

This is a React-based web application for "UKM Progress STIKOM Bali" - a student organization platform with a countdown timer feature and social media integration. The application serves as a landing page with quick actions, links, and social media cards. It uses a modern tech stack with TypeScript, Vite for build tooling, and includes comprehensive UI components from shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 and TypeScript, using Vite as the build tool and development server. The application follows a component-based architecture with:

- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management with custom query client configuration
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Theme System**: Custom theme provider supporting light/dark modes with CSS custom properties

## Backend Architecture
The backend uses Express.js with TypeScript in ESM format:

- **Server Framework**: Express.js with custom middleware for logging and error handling
- **Development Setup**: Vite integration for hot module replacement in development
- **Storage Interface**: Abstract storage interface with in-memory implementation for user data
- **API Structure**: RESTful API pattern with `/api` prefix for all endpoints

## Data Storage Solutions
The application is configured for PostgreSQL with Drizzle ORM:

- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **ORM**: Drizzle ORM with schema-first approach
- **Connection**: Neon Database serverless driver for PostgreSQL connections
- **Migrations**: Drizzle Kit for schema migrations in `./migrations` directory
- **Schema Location**: Shared schema definitions in `./shared/schema.ts`

The current implementation includes a users table with username/password fields and UUID primary keys.

## External Dependencies

### UI and Styling
- **shadcn/ui**: Comprehensive component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Headless UI primitives for accessibility
- **Lucide React**: Icon library
- **Font Awesome**: Additional icon support

### Development and Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Special plugins for Replit environment support

### Database and Backend
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database toolkit
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Utility Libraries
- **React Query**: Server state management and caching
- **Wouter**: Lightweight React router
- **date-fns**: Date manipulation utilities
- **clsx**: Conditional class name utility
- **Zod**: Schema validation library integrated with Drizzle

The architecture separates concerns between client, server, and shared code, with TypeScript providing type safety across all layers. The storage interface allows for easy switching between storage implementations, currently using in-memory storage with the infrastructure ready for PostgreSQL integration.