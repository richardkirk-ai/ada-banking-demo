# Ada Bank — demo mockup

A fictional UK retail bank ("Ada Bank", violet brand) used to demonstrate Ada's AI agent
across every channel in a realistic banking front-end. The web dashboard wires the **live
Ada agent** `demo-rkirk-fintech` via the Ada Frontend Chat API (`embed2.js`); the other
pages are self-contained scripted / conceptual visuals.

This is the **vanilla Ada Bank base** — the clean starting point to fork and re-skin for a
new customer. Client-specific variants (Sabadell, BKK) live in [`archive/`](archive/).

## Core pages (view switcher)

| Page | What it is | Agent |
|------|------------|-------|
| [`index.html`](index.html) | **Web** — retail online-banking dashboard. Standard Ada Web SDK launcher + `triggerProactive` campaign on load. | live (`embed2.js`) |
| [`custom.html`](custom.html) | **Front-End API** — a gallery of chat-window *design options* you can build with Ada's Front-End API (bottom-sheet, full-screen, floating launcher, inline, rich record cards, multimodal). Same one agent, many on-brand UIs. | conceptual |
| [`messaging.html`](messaging.html) | **Messaging** — omni-channel showcase: **Web Search** (AI answer from the KB + article links) · **Web Contact Form** (→ Email API) · Email · SMS · WhatsApp · Messenger · X · Instagram · **Voice**. | animated examples |
| [`app.html`](app.html) | **Mobile** — single-screen banking app in an iPhone frame with a scripted in-app chat sheet (fixed-rate-bond storyline). No external Ada window. | scripted |
| [`voice.html`](voice.html) | **Voice** — synced visual over a recorded Ada Bank voice call (Fixed-Rate Savings), timed to `voice-call.wav`. | recorded audio |
| [`mcp.html`](mcp.html) | **MCP** — animated 3-column diagram: Ada Bank systems → Claude/ChatGPT/Copilot → Ada config, with a Connect→Query→Update→Test loop. | conceptual |

### Account-opening journey (web → mobile)

A scripted "open an account" flow that starts on the web and continues on the phone, with a
stage-aware Ada assistant on every step and an Onfido-style ID check.

| Page | What it is |
|------|------------|
| [`new-account.html`](new-account.html) | Web landing: 4-step overview, £150 promo, QR + "Continue on your phone" → `onboarding.html`. |
| [`onboarding.html`](onboarding.html) | Mobile PWA: 7-step onboarding (requirements → account → login → details → ID upload → review → done) with a floating stage-aware Ada chat. |

Reached from the **New Account** link in the Web sidebar.

## Shared assets (single source of truth)

| File | Purpose |
|------|---------|
| [`site.css`](site.css) | All design tokens (`--brand`, `--brand-dark`, `--deep`, `--accent`, `--ground`, `--gray`, neutrals, channel palette) + the view-switcher styles. **Re-skin the whole site by editing the brand tokens here.** Every page links it first. |
| [`nav.js`](nav.js) | Renders the bottom-left view switcher once, marks the active page. Pages no longer hard-code it. |
| [`logo.svg`](logo.svg) | Ada Bank mark. |

## Archived brand variants

[`archive/`](archive/) holds complete client-specific builds kept for re-demo (out of the
live nav): `archive/sabadell/` (Banco Sabadell — Spanish, Bizum, ES/CA/EN, full account-opening
flow) and `archive/bkk/` (the earlier BKK Custom showcase). See [`archive/README.md`](archive/README.md)
to restore one.

## How the live Ada agent is wired (`index.html`)

```html
<script id="__ada" data-handle="demo-rkirk-fintech" data-lazy
        src="https://static.ada.support/embed2.js"></script>
```

- `data-lazy` stops the widget auto-opening — the app's own UI opens it via `adaEmbed.toggle()`.
- `metaFields` (name / segment / channel) personalise the agent.

> **Note:** the live agent behind `demo-rkirk-fintech` also hosts the Ada Bank Fixed-Rate
> Savings playbook + KB. Repoint `data-handle` to a customer's demo agent when forking.

## Run locally

```bash
python3 serve.py     # http://localhost:8000
```

## Hosting

Served via GitHub Pages from `main`. The `.nojekyll` file keeps Pages from processing the
site through Jekyll.
