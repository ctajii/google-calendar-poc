# Google Calendar PoC

A simple website that displays a live tally and chronological list of upcoming Google Calendar events.

![Preview](screenshots/preview.png)

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
