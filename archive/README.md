# Archived brand variants (cold storage)

These are complete, working demo pages kept for **re-demo**, not part of the live
Ada Bank site. They were built on top of the same banking scaffold and then re-skinned.

| Folder | What it is |
|---|---|
| `sabadell/` | Banco Sabadell variant — `custom.html` (4 in-app chat concepts, ES/CA/EN), plus the Spanish account-opening flow (`new-account.html` → `onboarding.html`). |
| `bkk/` | The earlier BKK-branded version of the Custom / in-app-chat showcase. |

## To re-demo one of these

The pages assume they live at the **repo root** (their `site.css` / `nav.js` / relative
links and page-to-page nav resolve from root). To bring one back:

```bash
# example: restore the Sabadell custom page
cp archive/sabadell/custom.html custom-sabadell.html
```

…then open it, or wire it into the nav as needed. Keeping them here (rather than deleting)
means they stay one copy away, and git history has every prior version regardless.
