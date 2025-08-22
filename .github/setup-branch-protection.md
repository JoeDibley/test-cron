# Branch Protection Setup

To enable branch protection rules that require build success before merging, follow these steps:

## For Dev Branch Protection:

1. Go to your repository settings: `https://github.com/JoeDibley/test-cron/settings/branches`
2. Click "Add rule" or edit existing rule for `dev` branch
3. Configure these settings:
   - ✅ **Require a pull request before merging**
   - ✅ **Require status checks to pass before merging**
     - ✅ **Require branches to be up to date before merging**
     - Add required status checks:
       - `build-and-test` (from Dev CI/CD workflow)
   - ✅ **Restrict pushes that create matching branches** 
   - ✅ **Do not allow bypassing the above settings**

## For Main Branch Protection:

1. Add rule for `main` branch with same settings plus:
   - Required status checks:
     - `build-and-test` (from Main CI/CD workflow)
     - `test-and-merge` (from dev-to-main sync workflow)

## GitHub Environments Setup:

1. Go to: `https://github.com/JoeDibley/test-cron/settings/environments`
2. Create two environments:
   - **dev**: No special restrictions
   - **production**: 
     - ✅ Required reviewers (optional)
     - ✅ Wait timer: 5 minutes (optional)

This ensures that:
- No direct pushes to dev/main
- All changes must pass CI builds
- PRs can only merge after successful builds
- Deployments are tracked and controlled