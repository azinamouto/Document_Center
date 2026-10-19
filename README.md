# One Talibon — Document Center

A standalone **React + TypeScript** UI prototype for a municipal document center. Designed for stakeholder review of folder hierarchy, browsing, search, metadata, and responsive navigation.

## Run locally

Requires Node.js 20.19+ or 22+.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## What works in the demo

- Browse main categories and nested folders with breadcrumbs.
- Browse mock documents in list or grid view.
- Search and filter documents by file type and review status.
- Sort documents by name or modification date.
- Inspect file metadata and fictional activity in a details drawer.
- Create and rename demo folders; star documents.
- Select and move documents between folders, move to trash, and restore.
- Browse by department, recently updated documents, starred documents, and archives.
- Reset the in-memory demonstration data.
- Responsive navigation and layouts.

**All records, names, statuses, and metadata are fictional illustrative examples.** The example folder categories are proposals, not an approved LGU records classification. This is not a production document management system.

## Not implemented

No backend, login, database, file storage, uploads/downloads, previews, permission enforcement, sharing, audit log persistence, or real document content. Interactions operate only on in-memory React state and reset on reload. Buttons representing unavailable functionality explain the limitation.

## Architecture

- `src/data.ts` — typed mock folders, documents, and departments
- `src/main.tsx` — demo application state and user interface
- `src/style.css` — responsive visual system

For production, split the prototype into domain components, design API contracts, define retention and access rules with LGU stakeholders, and implement secure object storage and authorization server-side.
