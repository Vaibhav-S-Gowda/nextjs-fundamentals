# Next.js Fundamentals & Web Application Frameworks II

> A comprehensive, structured learning repository covering core Next.js, React, and TypeScript concepts through hands-on programs, component libraries, dynamic routing, rendering strategies, and exercises.

---

## 📁 Repository Structure

```
WAF II/
├── Unit-1/
│   ├── assignment-01/          # Basic TypeScript programming exercises
│   ├── assignment-02/          # Student management TypeScript & React Component exercises
│   └── nextjs-programs/
│       ├── first-app/          # Next.js App Router (Layouts, Routing, Components, Error handling)
│       ├── second-app/         # Next.js App Router (About & Dashboard routes)
│       ├── env_variable/       # Next.js Environment Variables configuration app
│       └── typescript-programs/# Standalone TypeScript core language examples
└── Unit-2/
    ├── assignment-01/
    │   ├── reusable-button-component/ # Reusable React UI button component
    │   └── user-card/                 # Interactive user profile card component
    └── dynamic-routes/         # Next.js App Router: Dynamic Routing, CSR/SSR, & Styling
```

---

## 🧩 Curriculum Modules

### Unit 1 — Foundations & Core Concepts

#### `assignment-01` — TypeScript Basics
Collection of foundational TypeScript exercises covering math operations, control flows, and string manipulation.

| File | Topic / Purpose |
|------|-----------------|
| [`01-area-rectangle.ts`](Unit-1/assignment-01/01-area-rectangle.ts) | Area of a rectangle calculator |
| [`02-swap-numbers.ts`](Unit-1/assignment-01/02-swap-numbers.ts) | Variable swapping algorithms |
| [`03-calculate-grade.ts`](Unit-1/assignment-01/03-calculate-grade.ts) | Grading scale evaluator |
| [`04-check-pos-neg.ts`](Unit-1/assignment-01/04-check-pos-neg.ts) | Number sign classifier |
| [`05-square-number.ts`](Unit-1/assignment-01/05-square-number.ts) | Exponentiation helper |
| [`06-check-prime.ts`](Unit-1/assignment-01/06-check-prime.ts) | Prime number checker |
| [`07-reverse-string.ts`](Unit-1/assignment-01/07-reverse-string.ts) | String reversal function |
| [`08-smallest-in-an-array.ts`](Unit-1/assignment-01/08-smallest-in-an-array.ts) | Array minimum value finder |
| [`09-sum-and-average.ts`](Unit-1/assignment-01/09-sum-and-average.ts) | Numerical array aggregate operations |
| [`10-reverse-array.ts`](Unit-1/assignment-01/10-reverse-array.ts) | Array inversion algorithm |

#### `assignment-02` — Student Management
TypeScript interfaces and React component models for managing student datasets.

| File | Topic / Purpose |
|------|-----------------|
| [`01-Array-of-Students.ts`](Unit-1/assignment-02/01-Array-of-Students.ts) | Typed array of student objects |
| [`02-StudentList-using-Props.ts`](Unit-1/assignment-02/02-StudentList-using-Props.ts) | Student list rendering via React props |
| [`03-Student-Result-Page.ts`](Unit-1/assignment-02/03-Student-Result-Page.ts) | Student examination result view |
| [`04-Student-Interface.ts`](Unit-1/assignment-02/04-Student-Interface.ts) | TypeScript interface contract definitions |
| [`05-Simple-Student-Management-Page.ts`](Unit-1/assignment-02/05-Simple-Student-Management-Page.ts) | Interactive student management UI |

#### `nextjs-programs` — Next.js Applications & TS Utilities
- **`first-app/`**: Next.js App Router with modular layouts, custom routes (`/about`, `/contact`, `/header`, `/footer`, `/student`), global styling, `loading.tsx`, and `global-error.tsx`.
- **`second-app/`**: App Router structure demonstrating dashboard and static sub-pages.
- **`env_variable/`**: Next.js app showcasing server vs. client environment variables (`NEXT_PUBLIC_`).
- **`typescript-programs/`**: Core TypeScript demos including interfaces (`01-interface.ts`), prop typing (`studentProps.ts`), arrow functions, and data types.

---

### Unit 2 — Advanced Routing, State & Styling

#### `assignment-01` — Component Architecture
- **`reusable-button-component/`**: Reusable Button component featuring customizable variants, event handling, and prop typing.
- **`user-card/`**: Card UI component for displaying user metadata, avatars, and bio details.

#### `dynamic-routes` — Dynamic Routes & Rendering Strategies
Comprehensive Next.js application demonstrating:
- **Dynamic & Nested Routing**: `app/products/[id]`, `app/student/[id]`, `app/nested/[category]/[id]`.
- **Data Fetching Strategies**: Client-side rendering (`CSR`), Server-side rendering (`SSR`), and SWR integration (`client-swr`).
- **Styling Methodologies**: Inline CSS, CSS Modules (`*.module.css`), Tailwind CSS, Conditional Styling, and Dynamic Theme Styling.
- **Error Boundaries**: Custom error pages and boundary handling (`app/clientError/number`).

---

## 🚀 Getting Started

### Running Next.js Applications

Navigate into any Next.js app folder (e.g., `Unit-2/dynamic-routes`):

```bash
# Navigate to project folder
cd Unit-2/dynamic-routes

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running TypeScript Programs

```bash
cd Unit-1/assignment-01

# Execute directly using ts-node
npx ts-node 01-area-rectangle.ts

# Or compile with tsc and run with node
tsc 01-area-rectangle.ts && node 01-area-rectangle.js
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14+](https://nextjs.org/) | React Framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety & Structural Typing |
| [React 18/19](https://react.dev/) | UI Component Architecture |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-First Styling |
| [SWR](https://swr.vercel.app/) | Stale-While-Revalidate Data Fetching |

---

## 📄 License

Maintained for educational purposes as part of the **Web Application Frameworks II (MCA SEM III)** coursework.

