require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

if (!API_KEY || !CALENDAR_ID) {
  console.error("Missing GOOGLE_CALENDAR_API_KEY or GOOGLE_CALENDAR_ID in .env");
  process.exit(1);
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/events", async (req, res) => {
  const now = new Date().toISOString();
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

  const params = new URLSearchParams({
    key: API_KEY,
    timeMin: now,
    timeMax: sixMonthsLater.toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: "100",
  });

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?${params}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error("Google API error:", data.error?.message);
      return res.status(response.status).json({ error: data.error?.message || "Google API error" });
    }

    const events = (data.items || [])
      .filter((event) => !(event.summary || "").toLowerCase().includes("birthday"))
      .map((event) => ({
        title: event.summary || "(No title)",
        start: event.start?.dateTime || event.start?.date,
        end: event.end?.dateTime || event.end?.date,
        location: event.location || null,
        description: event.description || null,
        allDay: !event.start?.dateTime,
      }));

    res.json({ count: events.length, events });
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch calendar events" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
