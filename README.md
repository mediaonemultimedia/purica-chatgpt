# Purica ChatGPT - Deployment & Setup Guide

This repository contains the **production-ready** build of your AI Assistant. It is designed to be hosted independently on Vercel, giving you full ownership of the hosting account, billing, and data.

**Note:** This is a compiled application. You do not need to edit any code files (like `server.js` or `.js` files). All configuration is handled through Environment Variables, that can be accessed in your Vercel settings. 

---

## 1. Prerequisites

Before starting, ensure you have the following:

1.  **OpenAI API Key:**
    * Sign up at [platform.openai.com](https://platform.openai.com).
    * Add a payment method in **Settings > Billing** (The API requires a paid account with a small credit balance, e.g., $10).
    * Generate a new key at **Dashboard > API Keys**. Save this key securely.
2.  **GitHub Account:** To host the code.
3.  **Vercel Account:** To run the application.

---

## 2. Setup & Hosting

We use **Vercel** for hosting because it is secure, fast, and requires zero server maintenance.

### Step A: Fork this Repository
1.  Look at the top-right corner of this page.
2.  Click the **Fork** button.
3.  This creates a copy of this code in *your* personal GitHub account.

### Step B: Deploy to Vercel
1.  Log in to [vercel.com](https://vercel.com) using your **GitHub** account.
2.  On your dashboard, click **"Add New..."** -> **"Project"**.
3.  Select the repository you just forked (e.g., `client-assistant-dist`) and click **Import**.

### Step C: Configure Environment Variables (Crucial)
On the configuration screen, look for the **Environment Variables** section. You must add the following two variables for the app to work:

| Variable Name | Value Description |
| :--- | :--- |
| **`OPENAI_API_KEY`** | Paste the `sk-...` key you generated in the Prerequisites step. |
| **`ALLOWED_ORIGIN`** | The specific URL of your Shopify store where the bot will live (e.g., `https://www.purica.com` or `https://stag-purica.myshopify.com`). <br>*If you are testing locally, you can use `*` to allow all websites, but we recommend the specific URL for security.* |

1.  Enter the Name and Value for the first variable, then click **Add**.
2.  Repeat for the second variable.
3.  Click **Deploy**.

*The deployment will take about 1 minute. Once complete, Vercel will provide a URL (e.g., `https://your-project.vercel.app`). Copy this URL.*

---

## 3. Embed in Shopify

Now that the assistant is live on the internet, you can place it inside your Shopify store.

1.  Log in to your Shopify Admin.
2.  Navigate to the page or template where you want the assistant to appear (e.g., **Online Store > Pages** or inside a **Custom Liquid** section in the Theme Editor).
3.  Switch the text editor to **HTML View** (often represented by a `< >` icon).
4.  Paste the following code:

```html
<iframe
  src="[https://YOUR-VERCEL-PROJECT.vercel.app](https://YOUR-VERCEL-PROJECT.vercel.app)"
  width="100%"
  height="600px"
  frameborder="0"
  style="border: none; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  allow="microphone"
></iframe>