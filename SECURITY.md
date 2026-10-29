# Security Policy

## Supported Versions
Currently, only the latest `main` branch is supported.

## Scope
This is a client-side interactive calculator. No data is sent to the server. The primary security focus is on preventing Cross-Site Scripting (XSS) via DOM manipulation and ensuring the generated `mailto:` links are properly encoded to prevent injection attacks in the user's email client.

## Reporting a Vulnerability
Please do not report security vulnerabilities through public GitHub issues. Send an email to **br4yangil006@gmail.com**. You should receive a response within 48 hours.

Please include:
- Type of issue (e.g., DOM-based XSS, mailto injection)
- Full paths of source file(s) related to the issue
- Step-by-step instructions to reproduce the issue
- Impact of the issue
