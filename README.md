# Test Cron App

A simple web application for testing GitHub Actions cron workflows and automated deployments.

## Overview

This project demonstrates:
- Daily automated merging from `dev` to `main` branch
- Build verification before merging
- Simple web app that can be easily broken for testing

## Workflow

The GitHub Action runs daily at 06:00 UTC and:
1. Checks out the `dev` branch
2. Runs `npm run build` to verify the build works
3. Creates a PR from `dev` to `main` (if changes exist)
4. Auto-merges the PR if the build passes

## Local Development

```bash
# Install dependencies (none currently)
npm install

# Build the app
npm run build

# Run the server
npm start

# Visit http://localhost:3000
```

## Testing Build Failures

To test the workflow with build failures, uncomment the error line in `build.js`:

```javascript
// throw new Error('Simulated build failure for testing');
```

This will cause the build to fail and prevent the merge to main.

## Branches

- `main`: Production branch, only receives merges from dev
- `dev`: Development branch, where new changes are made

## Cron Schedule

The workflow uses `0 6 * * *` which means:
- `0` - At minute 0
- `6` - At hour 6 (06:00 UTC)  
- `*` - Every day of month
- `*` - Every month
- `*` - Every day of week

Change this to test different schedules (e.g., `*/5 * * * *` for every 5 minutes).