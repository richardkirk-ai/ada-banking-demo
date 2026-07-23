# Ada Banking — demo mockup

A fictional retail bank ("Ada Banking") used to demonstrate Ada's chat AI agent in a
realistic banking front-end. Two self-contained pages, both wiring the **live Ada
agent** `demo-rkirk-fintech` via the Ada Frontend Chat API (`embed2.js`).

| Page | What it is |
|------|------------|
| [`index.html`](index.html) | **Web app** — retail online-banking dashboard. Uses the live Ada Web SDK: standard launcher bottom-right, `toggle`/`setMetaFields`, and fires the `triggerProactive({ messageKey: "your_money_could_be_working_harder" })` campaign on load. |
| [`app.html`](app.html) | **Mobile app** — single-screen banking app in an iPhone frame. Self-contained: a **Support** icon (bottom-right of the menu) and a **proactive card** open a custom in-app chat sheet (¾ height, translucent backdrop). No external Ada window. |
| [`custom.html`](custom.html) | **Custom** — Banco Sabadell-branded showcase of four distinct front-end chat concepts (in-flow onboarding co-pilot, trilingual ES/CA/EN widget, proactive pay-by-instalments, in-chat Bizum action) over the dimmed dashboard. |
| [`custom-bkk.html`](custom-bkk.html) | **Archived** — the earlier BKK-branded version of the Custom showcase, kept for reuse. Not in the view switcher. |
| [`messaging.html`](messaging.html) | **Messaging** — omni-channel showcase (email, SMS, WhatsApp, Messenger, X, Instagram) with per-channel mock interactions. |
| [`voice.html`](voice.html) | **Voice** — synced visual over a pre-treated recorded Ada Bank voice call (Fixed-Rate Savings). Playbook execution, knowledge retrieval, and API/system calls animate in time with `voice-call.wav`. Defaults to 1.2× with a skip-to-end build-out. |

### Account-opening journey (web → mobile)

A scripted "open an account" flow that starts on the web and continues on the phone, with a stage-aware Ada assistant on every step and an Onfido-style ID check. Two brand variants:

| Page | What it is |
|------|------------|
| [`new-account.html`](new-account.html) | **Ada Bank (English, £)** — web landing: 4-step overview, £150 promo, QR + "Continue on your phone" → `onboarding.html`, scripted Ada helper. |
| [`onboarding.html`](onboarding.html) | **Ada Bank (English, £)** — mobile PWA: 10-step onboarding (products → login → details → ID upload → liveness → profession → review → e-sign → done) with a floating stage-aware Ada chat. |
| [`new-account-sabadell.html`](new-account-sabadell.html) | **Banco Sabadell (Spanish, €)** — Sabadell-blue re-skin of the web landing; €150 bono, links to `onboarding-sabadell.html`. |
| [`onboarding-sabadell.html`](onboarding-sabadell.html) | **Banco Sabadell (Spanish, €)** — Sabadell-blue re-skin of the mobile onboarding flow; DNI/NIE/pasaporte, CNAE, fully Spanish assistant ("Asistente Sabadell"). |

The view switcher (Web / Custom / Messaging / Mobile / Voice) links the five core pages. The account-opening pages are reached from the **New Account** link in the Web sidebar.

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
