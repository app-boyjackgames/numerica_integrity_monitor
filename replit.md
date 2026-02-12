# replit.md

## Overview

Math Explorer (titled "Numerical Integrity Monitor") is a cyberpunk-themed web application that analyzes mathematical properties of numbers. Users enter a positive integer and the app returns its divisors, sum of divisors, and classifications (Perfect/Abundant/Deficient, Prime/Composite/Unit). The UI uses a terminal/hacker aesthetic with glitch animations and neon green styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend
- **Framework**: Flask (Python) — a lightweight web framework serving both HTML templates and a JSON API.
- **Entry point**: `main.py` — contains the Flask app, the `/` route for serving the main page, and the `/analyze` POST endpoint for number analysis.
- **Note**: The `/analyze` route in `main.py` is incomplete — the `analyze()` function body is cut off after `data = request.get_json()`. It needs to be completed to parse the number from the request, call `analyze_number()`, and return the result as JSON.
- **Core logic**: `analyze_number(n)` computes proper divisors, their sum, and classifies the number as Perfect/Abundant/Deficient and Prime/Composite/Unit.

### Frontend
- **Templating**: Jinja2 templates (Flask's default), single page in `templates/index.html`.
- **Styling**: `static/css/style.css` — cyberpunk/terminal theme with CSS custom properties, glitch animation effects, neon green on dark background, JetBrains Mono font.
- **JavaScript**: `static/js/script.js` — handles form submission via `fetch()` POST to `/analyze`, displays results dynamically, maintains a scan history list in the DOM.
- **Note**: The CSS file appears truncated (`.blink` rule is incomplete). The JS file also appears truncated (missing closing braces).

### Data Storage
- **No database** — all state is client-side only (scan history lives in the DOM and is lost on page refresh).
- **No persistent storage** needed for current functionality.

### API Structure
- `GET /` — serves the main HTML page
- `POST /analyze` — accepts JSON `{ "number": <value> }`, returns JSON with `number`, `divisors`, `sum_divisors`, and `properties` fields. Returns `{ "error": "..." }` on invalid input.

### Known Issues to Fix
1. The `/analyze` route in `main.py` is incomplete — needs to extract the number, validate it, call `analyze_number()`, and return `jsonify()` response.
2. The CSS file is truncated — the `.blink` class and likely other styles (`.hidden`, `.badge`, `.cyber-btn`, input styling, history section styling) need to be completed.
3. The JS file is truncated — missing closing braces for `addToHistory` and the `DOMContentLoaded` event listener.

## External Dependencies

- **Flask** — Python web framework (needs to be installed via pip)
- **Google Fonts** — JetBrains Mono font loaded via CDN (`fonts.googleapis.com`)
- No database, no authentication, no other third-party services