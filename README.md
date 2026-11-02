# ARCloudGaming

Play PC and controller games on your phone with cloud gaming and on-screen controls.

## Features

- Game library with PC and controller titles, including Minecraft editions
- On-screen gamepad (D-pad, A/B/X/Y, LB/RB, Select, Start) for controller games
- Responsive landing page built with React, Tailwind CSS and shadcn/ui

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router
- Tailwind CSS + shadcn/ui
- TanStack Query
- Supabase (client library installed, ready for accounts)

## Getting Started

Requirements: Node.js 18+ and npm.

```bash
git clone https://github.com/<your-username>/arcloudgaming.git
cd arcloudgaming
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build         |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
src/
├── components/
│   ├── TouchControls.tsx   # On-screen gamepad
│   └── ui/                 # shadcn/ui components
├── pages/
│   ├── Index.tsx           # Landing page and game library
│   └── NotFound.tsx
├── App.tsx                 # Routes
└── main.tsx                # Entry point
```

## Deploying

Run `npm run build` and upload the `dist/` folder to any static host such as Vercel, Netlify or GitHub Pages.

## Notes

Cloud streaming is not yet connected to a live service. Game availability notes reflect current GeForce NOW and Xbox policies and may change.

## License

Add your license here.
