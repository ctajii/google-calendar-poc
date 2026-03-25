# Account Creation

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account (the same one your calendar is on)
3. At the very top-left of the page, next to the words "Google Cloud", there's a **project dropdown** — click it
4. In the popup, click **New Project** (top-right of the popup)
5. For "Project name", type anything you want (e.g. `Calendar PoC`)
6. Leave "Organization" and "Location" as-is — don't change them
7. Click **Create**
8. Wait a few seconds. A notification will pop up saying the project was created
9. Click the **project dropdown** again (same spot as step 3) and make sure your new project is **selected** (it should be bolded/highlighted). If it's not, click it to select it

## Step 2: Enable the Google Calendar API

1. On the left sidebar, click **APIs & Services** → then click **Library**
   - If you don't see the sidebar, click the **☰ hamburger menu** (three horizontal lines, top-left)
2. In the search bar, type **Google Calendar API**
3. Click the result that says "Google Calendar API" (by Google Enterprise API)
4. Click the big blue **Enable** button
5. You'll be taken to the API details page. You should see **Status: Enabled** on the right side

## Step 3: Create an API Key

> **⚠️ Important:** Google may try to walk you through creating a "Service Account" or "OAuth credentials" — **you do NOT need those**. You only need a simple API key. If you accidentally created a service account, that's fine — just ignore it and follow these steps.

1. On the left sidebar, click **APIs & Services** → then click **Credentials**
2. Near the top of the page, click the blue **+ CREATE CREDENTIALS** button
3. From the dropdown menu, select **API key** (NOT "OAuth client ID", NOT "Service account")
4. Create a name for your API Key ("Calendar API Key") - hit Create
4. A popup will appear showing your new API key — it looks like a long string of letters and numbers (e.g. `AIzaSyB...`)
5. **Copy this key** and save it somewhere safe (a text file, a note, etc.)
6. Click **Close**

### Optional: Restrict the API Key (recommended)

This prevents anyone else from using your key for other Google services:

1. After creating the key, click **RESTRICT KEY** in the popup (or find your key in the Credentials list and click the pencil icon to edit it)
2. Scroll down to **API restrictions**
3. Select **Restrict key**
4. From the dropdown, select **Google Calendar API** (YOU MUST PRESS OK - it should then say 1 API)
5. Click **Save**

## Step 4: Make Your Calendar Public

Your calendar **must be public** for the API key to read it. Here's how:

1. Go to [Google Calendar](https://calendar.google.com/) in your browser
2. On the left side, find your calendar name under "My calendars"
3. Hover over it and click the **three dots (⋮)** that appear → click **Settings and sharing**
4. Scroll down to **Access permissions for events**
5. Check the box ✅ **Make available to public**
6. A warning will pop up — click **OK**

> **Don't worry:** Making your calendar public only means people can **view** your events. Nobody can edit, add, or delete events on your calendar — that requires separate permissions that only you can grant.

## Step 5: Find Your Calendar ID

- **If it's your main/primary calendar:** your Calendar ID is just your **Gmail address** (e.g. `yourname@gmail.com`)
- **If it's a different calendar:** In the same Settings page from Step 4, scroll down to **Integrate calendar** — you'll see "Calendar ID" listed there

## What You Should Have When Done

You need **two things** to give to the app:

| What | Example |
|------|---------|
| **API Key** | `AIzaSyB...` (from Step 3) |
| **Calendar ID** | `yourname@gmail.com` (from Step 5) |