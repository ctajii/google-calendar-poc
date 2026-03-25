# Google Calendar PoC

A simple website that pulls live Google Calendar events via a backend proxy (so your API key is never exposed to the browser). Two example views are included:

- **List view** (`/` → `index.html`) — chronological event list grouped by month with a live count
- **Calendar view** (`/calendar.html`) — interactive month grid with event chips and hover tooltips, prev/next navigation

## List View

![List Example](screenshots/List%20Example.png)

## Calendar View

![Calendar Example](screenshots/Calendar%20Example.png)

## Setup

1. Follow the steps in [Account Creation.md](Account%20Creation.md) to get your Google Calendar API key and Calendar ID
2. Copy the example environment file and fill in your values:
   ```sh
   cp .env.example .env
   ```
3. Edit `.env` with your API key and calendar ID
4. Install dependencies and start the server:
   ```sh
   npm install
   npm start
   ```
5. Open http://localhost:3000

## How It Works

- **Backend** ([server.js](server.js)): Express server that proxies requests to the Google Calendar API. Your API key stays on the server and is never exposed to the browser.
- **Frontend** ([public/index.html](public/index.html)): Fetches events from `/api/events` and displays them grouped by month with a live count.

Events are fetched for the next 6 months from the current date, sorted chronologically.
