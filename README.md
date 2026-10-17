# Pockraft Landing Page Factory

Pockraft is a React and TypeScript factory for product, SaaS, project, waitlist, and lightweight sales landing pages. The React components are shared; each product is a typed content preset with its own copy, links, pricing, forms, metadata, logo, and theme.

## How it works

```text
product preset
    ↓ createLandingPage (defaults, normalization, immutable config)
preset registry
    ↓ VITE_LANDING_PAGE_ID
LandingPageProvider
    ↓
shared Header, LandingPage, DemoPage, and Footer
```

The shared UI does not import a particular product. `App` receives a `LandingPageConfig`, and the provider makes that config available to every section.

For the active portfolio's design tokens, low-coupling theme factory pattern, and safe visual-edit workflow, see [the portfolio design system guide](docs/portfolio-design-system-guide.md).

## Create another product landing page

### Quick edits for a client

For a normal client update, open only that client's file in `src/content/` (for example, `src/content/pockraft.ts`). Change the words between quotes, prices, URLs, and image paths. The field names describe what appears on the page; leave the field names and punctuation in place. No layout or component edits are needed for content changes.

To show or hide sections, edit the `showSections` block near the top of the preset:

```ts
showSections: {
  features: true,
  steps: true,
  pricing: false,
  callToAction: true,
  demo: false,
  contact: false,
},
```

All sections are visible by default. Set a value to `false` to hide it. The home page switches are `features`, `steps`, `pricing`, and `callToAction`. `demo` controls the `/demo` page, and `contact` controls its contact form. Update the `navigation` links too if you hide a section they point to.

To change colors, edit the `theme` values in that same preset. Use a leading `#` for hex colors, such as `'#172554'`.

### Add a separate client

1. Copy the existing preset:

   ```bash
   cp src/content/pockraft.ts src/content/acme.ts
   ```

2. In `src/content/acme.ts`, rename the export and replace the client information. Keep the provided example as a reference for the required fields:

   ```ts
   import { createLandingPage } from '../factories/createLandingPage';

   export const acmeLandingPage = createLandingPage({
     brand: {
       name: 'Acme Cloud',
       category: 'Developer platform',
       logoSrc: '/acme-logo.svg',
       metaTitle: 'Acme Cloud — Ship faster',
       metaDescription: 'The deployment platform for small product teams.',
     },
     theme: {
       foreground: '#172554',
       muted: '#eff6ff',
       border: '#bfdbfe',
       radius: '1rem',
     },
     // navigation, hero, features, steps, pricing, callToAction,
     // demo, contact, and footer follow the Pockraft preset shape.
   });
   ```

   `id`, `copyrightYear`, and unspecified theme tokens receive safe defaults. TypeScript reports any required product content that is missing.

3. Register the preset in `src/content/index.ts`:

   ```ts
   import type { LandingPageConfig } from '../types/landingPage';
   import { acmeLandingPage } from './acme';
   import { pockraftLandingPage } from './pockraft';

   export const landingPagePresets = {
     pockraft: pockraftLandingPage,
     acme: acmeLandingPage,
   } satisfies Record<string, LandingPageConfig>;
   ```

4. Select it while developing or building:

   ```bash
   VITE_LANDING_PAGE_ID=acme npm run dev
   VITE_LANDING_PAGE_ID=acme npm run build
   ```

   For a persistent local choice, copy `.env.example` to `.env.local` and change its value. Use a different environment value for each deployed project.

## Configurable product areas

- Brand identity, browser title, and description metadata
- Per-product color tokens and border radius
- Header navigation and internal or external calls to action
- Hero message and trust signals
- Feature, process, and pricing cards
- A product demo page
- Contact labels, placeholders, submit endpoint, and HTTP method
- Footer navigation, credits, and copyright

Every pricing tier owns its action URL; there are no shared hard-coded checkout links. Set `external: true` on links or actions that should open in a new tab. If `contact.form.action` is omitted, the sample form validates but does not send data.

## Project structure

```text
src/
  components/          Shared UI, links, header, and footer
  content/             One factory preset per product
  context/             Config injection for shared components
  data/                Active preset selection
  factories/           Config factory and icon registry
  layouts/             Shared page shell and theme application
  pages/               Page composition
    sections/          One independent component per landing-page section
  types/               Factory input and normalized config contracts
```

The client workflow is: edit a preset in `src/content/`, register it in `src/content/index.ts`, then select it with `VITE_LANDING_PAGE_ID`. Shared layouts and section components are for design or behavior changes that should apply across clients.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

Keep product-specific values in `src/content/`. Components should only change when every product needs a new layout capability.
