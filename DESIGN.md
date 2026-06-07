# Harvard University - Design Document

This document outlines the design system, aesthetic principles, and technical foundations of the official [Harvard University website](https://www.harvard.edu/).

## Overview
The Harvard University website is built using the **HarvardSites Design System**, a comprehensive digital framework designed specifically for Harvard websites. The design prioritizes extreme accessibility, usability, and a consistent, authoritative brand identity across its digital ecosystem.

## Design Aesthetic
- **Style:** Academic, authoritative, traditional yet modern, and highly accessible.
- **Vibe:** Serious, distinguished, and clean. It balances its 400-year legacy with a modern, responsive digital experience.
- **Accessibility:** Strict adherence to WCAG 2.1 Level AA contrast standards. Functionality and readability take precedence over flashy animations or complex interactions.

## Color Palette
The color system reinforces the core brand while allowing structured flexibility:
- **Primary Brand Colors:**
  - **Harvard Crimson (`#A51C30`):** The iconic brand color. Used for prominent UI elements, buttons, and the Veritas Shield. *Rule: Crimson must never be used as a text color to ensure readability.*
  - **Black (`#1E1E1E`):** Used for primary text and major structural borders.
  - **White (`#FFFFFF`):** Used as the primary background color for clarity and high contrast.
- **Secondary & Accent Colors:**
  - **Ivy Green (`#52854C`)**
  - **Blue (`#4E84C4`)**
  - **Saffron/Orange (`#D16103`)**
  - **Lemon/Yellow (`#FFDB6D`)**
  - **Indigo (`#0A2240`)**
  - **Mortar/Warm Gray (`#99918F`)**
  - **Slate/Cool Gray (`#8996A0`)**

## Typography
Harvard's typography system relies on "clean typography" with strict constraints:
1. **Core Rule:** A maximum of two typefaces can be used in a single design, and at least one must be a sans-serif to ensure legibility.
2. **Typeface Pairings:** The site utilizes distinct combinations (e.g., Editorial Serif paired with Contemporary Sans Serif or Modern Geometric) for clear hierarchy.
3. **Styling Rules:** Drop shadows, outlines, horizontal scaling, and underlining non-link text are strictly prohibited. Text alignment is strictly left or right; centering and full justification are avoided for optimal reading flow.

## Key UI Components & Details
- **Veritas Shield:** The university's logo/shield must only be rendered in Crimson, Black, and White. It cannot be placed on crimson or similarly valued backgrounds.
- **Navigation:** Deep, accessible dropdown menus with a clear "A to Z index" and structured "Campus" or "Academics" sections.
- **Section Headers:** Clean header text often accented by thick, colorful horizontal rules (20px border-bottom) in the secondary colors (e.g., Ivy, Saffron, Indigo).

## Technology Stack (Frontend)
- **CMS / Framework:** The site is heavily powered by **WordPress**, specifically utilizing the HarvardSites platform architecture.
- **Blocks:** Uses native Gutenberg blocks (`wp-block-paragraph`, `wp-block-columns`, `wp-block-separator`) customized with CSS variables for layout and spacing.
- **SEO & Tracking:** Utilizes Yoast SEO Premium and Google Tag Manager (`gtm4wp`) for analytics and schema metadata.
