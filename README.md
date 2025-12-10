# Français du monde – Munich (static site)

Single-page static site with custom HTML, CSS, and a small bit of JS. No build step or external dependencies.

## Layout and design
- Colors: Upsdell red (#AE1F27) for accents/links, Purple navy (#5F5693) and Green cyan (#469970) for headings/kickers and gradients, with neutral grays for backgrounds, text, and borders.
- Sections: each section uses a gradient kicker, a heading, and a short eyebrow label. Content sits inside a centered container (~64rem max-width).
- Cards: light border, subtle shadow, rounded corners; used in the association content and archives list.
- Nav: pill-style links that scroll horizontally on mobile and wrap on larger screens.
- Newsletter: Mailchimp subscribe iframe, borderless with rounded corners.
- Footer: white background, gradient line, vertical social links, address block, and external logo.

Example section structure:
```html
<section class="section">
  <div class="container">
    <div class="section-kicker mb-6">
      <h2 class="h2">Titre</h2>
      <p class="eyebrow">sous-titre</p>
    </div>
    <div class="card">Contenu…</div>
  </div>
</section>
```

## Integrations
- Events: Luma calendar embed (iframe).
- Newsletter: Mailchimp subscribe embed (iframe).
- Archives: Mailchimp archive via the `generate-js` script, then rendered into a filterable list in `script.js`. Follows Mailchimp’s archive embed guidance (see https://mailchimp.com/help/add-an-email-campaign-archive-to-your-website/).

## Behavior and caveats
- The Mailchimp archive script is blocking while it loads and parses; content can be delayed briefly until it finishes.
- Archive rendering depends on Mailchimp’s emitted `.campaign` markup; if Mailchimp changes it, `script.js` may need updates.

## Editing tips
- Edit `index.html`, `styles.css`, and `script.js` directly; keep using the existing custom classes and patterns.
- For new styles, extend `styles.css` (cards, sections, grids, nav pills) rather than introducing new frameworks.
- After changes to archives, verify: loader hides, year filter appears, items render as clickable cards.

## File overview
- `index.html` — page markup, embeds, archive script tag at the end.
- `styles.css` — custom layout/typography/component styles.
- `script.js` — Mailchimp archive enhancement logic.
- `images/` — logos/icons.
