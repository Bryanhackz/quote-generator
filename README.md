# Instant Quote Generator

## Problem
Freelancers and agencies waste valuable time manually calculating basic project estimates and answering initial client inquiries.

## Solution
A highly responsive, client-side interactive calculator. Clients select desired services, see the total update in real time, and generate a pre-filled email (`mailto:`) with the exact breakdown of their request.

## Stack
- Backend: Python 3.11+ (`wsgiref`, `pathlib`) strictly for static file serving and security headers.
- Frontend: Vanilla HTML5, CSS3, and ES Modules.
- No external dependencies.

## Setup
```bash
python server.py
```
Open `http://localhost:8000`.

## Architectural decisions
- **Client-Side Logic:** Calculations happen entirely in the browser. This eliminates the need for a database or complex API, ensuring maximum privacy and zero latency for the user.
- **No payment gateway:** The goal is lead generation, not transaction processing. The `mailto:` handoff ensures the freelancer captures the lead directly in their inbox.
- **Strict CSP:** The application uses Vanilla JS modules and no inline scripts, allowing it to operate flawlessly under a strict `script-src 'self'` Content Security Policy.