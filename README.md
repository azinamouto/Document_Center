<div align="center">

# ONE TALIBON
### DOCUMENT CENTER

**A modern workspace for organized municipal documents.**

<img src="https://img.shields.io/badge/STATUS-FRONTEND_PROTOTYPE-166534?style=flat-square&labelColor=111827" alt="Prototype Status" />
<img src="https://img.shields.io/badge/REACT-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TYPESCRIPT-166534?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/VITE-20232A?style=flat-square&logo=vite&logoColor=white" alt="Vite" />

<br/>

**Structured. Accessible. Reliable by design.**

A standalone document-management interface built for the One Talibon ecosystem.

</div>

---

## 01 / Overview

**One Talibon Document Center** is a React-based frontend prototype designed to simplify how municipal offices organize, browse, and locate documents.

The interface follows familiar file-management patterns while emphasizing clear navigation, structured folder hierarchies, readable metadata, and responsive usability.

Developed as an isolated project for UI/UX evaluation before backend integration.

> **Current stage:** Static frontend prototype. All document records and interactions are simulated using local data.

## 02 / Core Capabilities

| Module | Description |
|:--|:--|
| **Document Explorer** | Browse documents through organized folders and subfolders. |
| **Folder Management** | Create, rename, and navigate folders in the demo workspace. |
| **Document Library** | View sample documents with relevant metadata. |
| **Search & Filters** | Find documents by name, type, department, or status. |
| **Document Inspector** | View ownership, version, dates, and document details. |
| **Workspace Navigation** | Access recent, starred, and categorized documents. |
| **Responsive Interface** | Adapted layouts for desktop, tablet, and mobile. |

## 03 / Information Architecture

The prototype demonstrates a structured document hierarchy:

```text
DOCUMENT CENTER
│
├── Governance & Administration
│   ├── Memorandums & Circulars
│   ├── Executive Orders
│   └── Council Resolutions
│
├── Finance & Procurement
│   ├── Budget & Appropriations
│   ├── Procurement Records
│   └── Financial Reports
│
├── Planning & Development
│   ├── Development Plans
│   ├── Programs & Projects
│   └── Monitoring Reports
│
├── Department Records
│   ├── Office-Specific Documents
│   └── Reports & Submissions
│
├── Legal & Compliance
│   ├── Policies & Guidelines
│   ├── Agreements & Contracts
│   └── Compliance Records
│
└── Archives
    ├── Closed Records
    └── Historical Documents
```

*The structure is illustrative and subject to organizational review.*

## 04 / Design Philosophy

The interface is designed around four principles:

**Clarity first.** Information is organized to reduce unnecessary navigation and cognitive load.

**Familiar interactions.** Folder browsing, breadcrumbs, and file operations follow established document-management conventions.

**Accessible by default.** Readable typography, clear visual states, and responsive layouts support different users and devices.

**Minimal visual language.** White surfaces, forest-green accents, subtle shadows, and restrained borders keep the interface professional.

## 05 / Technology

| Layer | Technology |
|:--|:--|
| Frontend | React |
| Language | TypeScript |
| Build Tool | Vite |
| Icons | Lucide React |
| Styling | CSS |
| Data | Local mock data |
| State | React state |

No backend, database, or external storage service is required to run the prototype.

## 06 / Getting Started

### Requirements

- Node.js 20.19+ or compatible Node.js 22+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Project-Intra-Smithy/ONE-TALIBON-DOCUMENT-CENTER.git
cd ONE-TALIBON-DOCUMENT-CENTER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## 07 / Project Structure

```text
ONE-TALIBON-DOCUMENT-CENTER/
│
├── src/
│   ├── data.ts
│   ├── main.tsx
│   └── style.css
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

The initial structure is intentionally lightweight to support rapid UI prototyping.

## 08 / Current Scope

**Implemented as frontend demonstrations:**

- Folder and document browsing
- Interactive navigation
- Search and filtering
- Document metadata inspection
- Simulated file-management actions
- Responsive layouts

**Not yet implemented:**

- Persistent database storage
- Real file upload and download
- Authentication and authorization
- Server-side document permissions
- File version storage
- Backend audit logging
- Production records retention policies

The application is not intended to store or process actual municipal records in its current state.

## 09 / Development Roadmap

| Phase | Objective | Status |
|:--|:--|:--|
| 01 | UI/UX prototype | In development |
| 02 | Data model and API contracts | Planned |
| 03 | Authentication and access control | Planned |
| 04 | Secure document storage | Planned |
| 05 | Versioning and audit history | Planned |
| 06 | One Talibon integration | Proposed |

The roadmap represents potential development directions, not committed delivery dates.

## 10 / Project Notes

This repository is maintained separately from the primary One Talibon application.

The separation allows the document-management experience to be evaluated and improved without affecting existing production workflows.

Backend architecture, storage policies, permissions, and integration requirements will require further technical review before production implementation.

---

<div align="center">

**ONE TALIBON — DOCUMENT CENTER**

<sub>Organized information. Clearer workflows. Better access.</sub>

<br/>

<img src="https://img.shields.io/badge/ONE_TALIBON-DOCUMENT_CENTER-166534?style=flat-square&labelColor=111827" alt="One Talibon Document Center" />

</div>
