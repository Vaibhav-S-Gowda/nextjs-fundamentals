# Next.js Fundamentals

> A structured learning repository covering core Next.js and TypeScript concepts through hands-on programs and exercises.

---

## 📁 Repository Structure

```
WAF II/
└── Unit-1/
    └── nextjs-programs/
        ├── first-app/          # Next.js application (App Router)
        └── typescript-programs/ # TypeScript fundamentals exercises
```

---

## 🧩 Modules

### Unit 1 — Foundations

#### `first-app` — Next.js Application
A Next.js 14+ project bootstrapped with `create-next-app`, using the **App Router** architecture.

| File | Description |
|------|-------------|
| `app/page.tsx` | Home page — demonstrates conditional rendering (Even/Odd check) |
| `app/layout.tsx` | Root layout with global styles and metadata |
| `app/globals.css` | Global CSS styles |

#### `typescript-programs` — TypeScript Exercises
Standalone TypeScript programs illustrating language fundamentals. Each program is compiled to JavaScript and retained in `.ts` and `.js` pairs.

| File | Concept |
|------|---------|
| `hello.ts` | Hello World — basic TypeScript setup |
| `arrow.ts` | Arrow functions with typed parameters |
| `data_types.ts` | Primitive and complex TypeScript data types |
| `conditions_and_loops.ts` | Control flow — conditionals and loops |
| `interface.ts` | TypeScript interfaces and object typing |
| `sum-of-array.ts` | Array operations and typed return values |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Running the Next.js App

```bash
cd Unit-1/nextjs-programs/first-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running TypeScript Programs

```bash
cd Unit-1/nextjs-programs/typescript-programs

# Run a TypeScript file directly using ts-node
npx ts-node hello.ts

# Or compile first, then run with Node
tsc hello.ts && node hello.js
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14+](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Typed superset of JavaScript |
| [React](https://react.dev/) | UI component library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |

---

## 📚 Learning Objectives

- Understand the **Next.js App Router** structure and file-based routing
- Practice **TypeScript** type annotations, interfaces, and generics
- Apply **conditional rendering** in React components
- Work with **arrow functions**, data types, and control flow in TypeScript

---

## 📄 License

This repository is maintained for educational purposes as part of the **Web Application Frameworks II** coursework.
