# SRNA Steel Industries — Web Application

A modern, responsive web application for **SRNA Steel Industries**, a premier steel supplier and trading company based in Bhilai, Chhattisgarh, India. The application showcases steel products, custom cutting services, company capabilities, and provides direct WhatsApp enquiry channels for B2B industrial clients.

---

## 🏗️ Overview

**SRNA Steel Industries** specializes in industrial steel supply, plate cutting, scrap, and structural materials. This web platform offers clients and fabrication partners an interactive digital catalogue, real-time product search/filtering, detailed specification modals, and streamlined enquiry handling.

### Key Offerings
- **MS Plates & Category (A) Plates** (10 mm – 40 mm)
- **Custom Size Plate Cutting & MS Profile Cutting Services** (Circles, Squares, Flanges, Base Plates)
- **End Shearing / End Cutting Pieces**
- **MS Melting Scrap & Rolling Scrap**
- **Alloy Steel Bloom (10Mn7 CC) & Steel Billets**
- **MS Circles & Custom Fabrications**

---

## 🚀 Features

- **📱 Fully Responsive Design**: Seamless experience across mobile, tablet, and desktop screens with custom slide-out navigation.
- **🔍 Interactive Digital Catalogue**: Real-time search by product name/description with tab-based category filters (*All items*, *Products*, *Services*).
- **📋 Product Specification Modals**: In-depth view of item dimensions, grades, standards, conditions, and applications with direct enquiry triggers.
- **💬 Direct WhatsApp Integration**: Pre-filled quotation and enquiry requests generated for specific products, custom cut dimensions, or general inquiries.
- **📍 Location & Contact Desk**: Quick access to Google Maps directions, phone/email contact links, and interactive enquiry preparation.
- **⚡ High Performance**: Ultra-fast load times powered by Vite, React 18, and lightweight SVG/Lucide icons.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom Design Tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend / Integration**: [@supabase/supabase-js](https://supabase.com/)
- **Linting & Code Quality**: ESLint 9 + TypeScript-ESLint

---

## 📁 Project Structure

```text
├── public/
│   ├── images/              # Product and facility photography
│   └── srna-logo.svg        # Company brand logo
├── src/
│   ├── App.tsx              # Main application component & data models
│   ├── index.css            # Design system, typography, and styling
│   ├── main.tsx             # Application root mount point
│   └── vite-env.d.ts        # Vite TypeScript type declarations
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML entry point & SEO meta tags
├── package.json             # Dependencies and npm scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript base configuration
└── vite.config.ts           # Vite bundler configuration
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### Installation

1. Clone or open the repository:
   ```bash
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds production assets in the `dist/` directory. |
| `npm run preview` | Locally previews the production build from `dist/`. |
| `npm run typecheck` | Runs TypeScript type checking without emitting files. |
| `npm run lint` | Lints project files using ESLint. |

---

## 📞 Contact & Business Info

- **Company**: SRNA Steel Industries
- **Location**: Bhilai, Chhattisgarh, India
- **Phone / WhatsApp**: [+91 6266194648](https://wa.me/916266194648)
- **Email**: [srnasteel@gmail.com](mailto:srnasteel@gmail.com)
- **Google Maps**: [SRNA Steel Industries on Maps](https://maps.app.goo.gl/uNvnVqAYEEkaGXSi8)

---

## 📄 License

Private / Proprietary — © 2026 SRNA Steel Industries. All rights reserved.
