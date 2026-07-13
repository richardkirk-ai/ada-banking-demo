# Ada Banking — demo mockup

A fictional retail bank ("Ada Banking") used to demonstrate Ada's chat AI agent in a
realistic banking front-end. Two self-contained pages, both wiring the **live Ada
agent** `demo-rkirk-fintech` via the Ada Frontend Chat API (`embed2.js`).

| Page | What it is |
|------|------------|
| [`index.html`](index.html) | **Web app** — retail online-banking dashboard (accounts, balances, transactions, notifications). Demonstrates **proactive notifications** and **Ada Frontend API** usage (`toggle`, `setMetaFields`). |
| [`app.html`](app.html) | **Mobile app** — single-screen banking app in an iPhone frame. Accounts + balances, a bottom menu with a **Support** icon (bottom-right), and a **proactive card** that launches the live Ada chat. |

## How the Ada agent is wired

```html
<script id="__ada" data-handle="demo-rkirk-fintech" data-lazy
        src="https://static.ada.support/embed2.js"></script>
```

- `data-lazy` stops the widget auto-opening — the app's own UI opens it.
- The default Ada launcher button is hidden with CSS (`#ada-button-frame{display:none}`).
- Any button (nav "Ask Ada", proactive card/toast, table row, sidebar) calls
  `window.adaEmbed.toggle()` to open the live chat.
- `metaFields` (name / segment / channel) are passed so the agent is personalised.

> **Note:** the live agent behind `demo-rkirk-fintech` is *Peachy / Peach Payments*
> (merchant payments support). The "Ada Banking" retail skin is the container; repoint
> `data-handle` to a retail-bank agent to make live answers match the front-end.

## Run locally

```bash
python3 serve.py     # http://localhost:8000
```

## Hosting

Served via GitHub Pages from `main`. The `.nojekyll` file keeps Pages from processing
the site through Jekyll.
