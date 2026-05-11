# 01 — React Basics

A function component using `useState` and `useEffect`, styled with the cobalt design system.

## Run it

```bash
pnpm install   # from the repo root, one time
pnpm dev       # from this directory
```

Then open the URL Vite prints (default: <http://localhost:5173>).

## Files

- `src/main.jsx` — entry point. Mounts `<App/>` inside `<CobaltProvider theme="dark">` and imports cobalt's stylesheet.
- `src/App.jsx` — the page layout. Uses cobalt `<Heading>` and `<Body>` for typography.
- `src/FunctionButton.jsx` — the component this lesson is about. `useState` holds a timestamp, `useEffect` sets it on mount, the button alerts with the captured value.

## Notes on the cobalt swap

The original lesson used inline `style={{backgroundColor: props.color}}` on a raw `<button>`. We now use cobalt's `<Button variant="primary">` — design-system colors only, no free-form `color` prop. This is the pattern you'll use in real codebases.

> **Full lesson narrative + AI co-pilot sidebar:** coming in Phase 5 (see `plans/review-this-repo-for-drifting-bonbon.md`).
