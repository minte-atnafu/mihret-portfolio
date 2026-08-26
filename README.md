# Mihret Erkihun Portfolio

A visual portfolio website for Mihret Erkihun, an independent graphic, brand, and UI/UX designer based in Addis Ababa, Ethiopia.

## Overview

The portfolio presents selected work across:

- UI/UX design
- Brand identity systems
- Posters and cultural campaigns
- Digital experiences

The site is designed with a typography-led editorial layout, light and dark themes, responsive navigation, project filtering, image galleries, and scroll-based project reveals.

## Features

- Responsive desktop and mobile layouts
- Light and dark theme toggle with saved preference
- Mobile navigation menu
- Filterable project gallery for UI/UX, Branding, and Poster work
- Project modal with image slideshow
- One-second automatic slideshow playback
- Previous and next image controls
- Clicking the displayed image or navigation arrows pauses the slideshow
- Project-specific image collections sourced from `resources/`
- Scroll reveal animation for project cards
- Direct links to selected live projects
- Reduced-motion support for accessibility

## Tech Stack

- React 18
- Vite 5
- JavaScript
- CSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173/
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── resources/           # Portfolio images and project screenshots
├── src/
│   ├── App.jsx          # Portfolio content and interactions
│   ├── main.jsx         # React entry point
│   └── styles.css       # Layout, themes, responsive styles, and animation
└── README.md
```

## Adding Project Images

Project images are stored under `resources/` and referenced in `src/App.jsx` with the `asset()` helper. UI/UX projects can use multiple screenshots in an array to populate their slideshow.

When adding a project:

1. Place its images in an appropriate folder inside `resources/`.
2. Add the image paths to `media` or `uiSets` in `src/App.jsx`.
3. Add the project metadata to the `projects` array.
4. Set the project type to `UI/UX`, `Branding`, or `Poster` so filtering works correctly.

## Contact

- Email: [mhireterkihunsep@gmail.com](mailto:mhireterkihunsep@gmail.com)
- Instagram: [@phinhans4](https://instagram.com/phinhans4)
- Telegram: [@Binthakim19](https://t.me/Binthakim19)

## License

This repository contains personal portfolio content and project assets. Use of the images, branding work, and personal materials requires permission from Mihret Erkihun.
