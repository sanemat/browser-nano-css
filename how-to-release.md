# Manual

1. Create branch `git checkout -b chore/bump-0-1-2 origin/main`
2. Update `version` in `package.json`
3. `npm run changelog`, and update changelog.md
4. `git add -p` to create commit
5. Make Pull request
6. Merge it
7. `git fetch origin`
8. `git checkout main`
9. `git rebase origin/main`
10. `npm run build` **Important**
11. `tig` to get latest commit
12. `git tag v0.1.2 ec6e1f08c65e489b7a79e01597855ec218d1fe5e`
13. `git push orgin v0.1.2`
14. `npm publish`

# Auto

1. Use https://github.com/sanemat/browser-nano-css/actions/workflows/manual-version-bump.yml
2. Modify the pull request
3. Merge it
4. Trigger https://github.com/sanemat/browser-nano-css/actions/workflows/push-tag-and-release.yml

# If you already push git tag

1. Use https://github.com/sanemat/browser-nano-css/actions/workflows/manual-release.yml
