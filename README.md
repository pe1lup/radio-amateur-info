# Radio Amateur Info

Een Nederlandstalige wiki over digitale communicatiemogelijkheden voor de zendamateur.

**Wat zijn de mogelijkheden voor digitale communicatie voor de zendamateur?** Die vraag staat centraal. De wiki biedt een overzicht van zowel amateur- als professionele digitale modi, met technische specificaties, frequenties en software per modus.

## Inhoud

- **[Digitale amateur modes](src/content/docs/digitale-amateur-modes.md)** - APRS, FT8, FT4, PSK31, PACTOR, RTTY, Olivia, DominoEX, CW en meer
- **[Digitale professionele mode](src/content/docs/digitale-professionele-mode.md)** - Coquelet en andere historische overheidsmodi

## Technologie

- [AstroJS](https://astro.build) met [Starlight](https://starlight.astro.build) documentatiethema
- Statische site, gedeployd op GitHub Pages

## Lokale ontwikkeling

Vereisten: [Node.js](https://nodejs.org) ≥ 18 en [pnpm](https://pnpm.io)

```bash
pnpm install
pnpm dev
```

De site draait dan op `http://localhost:4321`.

## Bouwen

```bash
pnpm build
```

De statische output staat in `dist/`.

## Inhoud aanpassen

Alle pagina's staan als Markdown-bestanden in `src/content/docs/`:

| Bestand | Pagina |
|---------|--------|
| `index.mdx` | Homepage |
| `digitale-amateur-modes.md` | Amateur modes |
| `digitale-professionele-mode.md` | Professionele modes |

## Deployment

De site wordt automatisch gebouwd en gepubliceerd via GitHub Actions bij elke push naar `main`.
