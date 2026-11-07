# Echoes of the Wild
A playable browser platformer made for Joydeep Sasmal. Original procedural pixel art, five themed worlds, fifteen levels, double jumping, dash, melee and magic attacks, moving platforms, ladders, switches, chests, checkpoints, guardians, touch input, outfit unlocks, and local progress.

## Run
Requires Node.js 20+.
```
npm install
npm run dev
npm run build
```
Deploy `dist/` to a static host. Vercel configuration is included. The build typechecks TypeScript before bundling. No API keys or backend are required.

## Structure
- src/main.tsx — React menu, world selector, journey, settings, rewards
- src/Game.tsx — Phaser scene and responsive HUD
- src/Art.tsx — deterministic original pixel landscapes
- src/worlds.ts — five worlds and fifteen level definitions
- src/store.ts — Zustand persisted state and Web Audio sound
- src/style.css — responsive theme with Tailwind integration

## Controls
A/D or arrows move, Space double jump, Shift dash, J melee, K magic, E interact, W/Up climb, Escape pause. Touch buttons appear below gameplay. Defeat each third level's boss to enter its portal. Gates open at nearby switches with E. Collect elevated crystals for higher star ratings.

## Scope
A complete compact campaign built around reusable platforming systems. Leaderboard is local to the browser, not online. Level layouts use deterministic procedural placement; each world has three increasingly long routes. Ice momentum, lava danger and a celestial gravity well vary traversal. Cosmetics are three earned outfit colors. Audio is synthesized interaction sound; no external soundtrack. Advanced swimming, dedicated wall-jump animation, deep NPC dialogue, separate bonus levels and extensive equipment customization are not included. Daily challenge is local and resets by date; XP is a displayed challenge award. Browser storage may be cleared by the browser. Exit returns to camp because web apps cannot reliably close their own tab.

## Assets
All visuals are programmatically drawn, with no external asset dependencies. Sound requires a user gesture. No purchases, advertising, accounts, or gambling.

All five worlds and all fifteen levels are available immediately, including for existing saves. Completion ratings, rewards and checkpoints remain earned through play.
