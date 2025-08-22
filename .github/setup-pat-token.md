# Setting up Personal Access Token for Automated PRs

GitHub Actions with the default `GITHUB_TOKEN` cannot create pull requests for security reasons. To enable the automated dev→main sync workflow to create PRs, you need to set up a Personal Access Token (PAT).

## Steps:

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/personal-access-tokens/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Set expiration (recommend 1 year)
   - Select scopes:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows)

2. **Add Token to Repository Secrets:**
   - Go to: https://github.com/JoeDibley/test-cron/settings/secrets/actions
   - Click "New repository secret"
   - Name: `PAT_TOKEN`
   - Value: [paste your PAT token]

3. **The workflow will automatically use this token** instead of the default GITHUB_TOKEN

## Alternative: Manual PR Creation

If you prefer not to use a PAT, the workflow will log the changes and you can manually create PRs when needed.