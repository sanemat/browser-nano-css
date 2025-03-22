# How to Release

## Manual

1. Create a branch:
   ```bash
   git checkout -b chore/bump-0-1-2 origin/main
   ```
2. Update the version number in `package.json`
3. Run the changelog command:
   ```bash
   npm run changelog
   ```
   Then update `CHANGELOG.md` if needed.
4. Add the changes step by step:
   ```bash
   git add -p
   ```
5. Make a pull request
6. Merge the pull request
7. Get the latest changes from the remote:
   ```bash
   git fetch origin
   ```
8. Switch to the main branch:
   ```bash
   git checkout main
   ```
9. Update your local branch:
   ```bash
   git rebase origin/main
   ```
10. **Important**: Build the project:
    ```bash
    npm run build
    ```
11. Check the latest commit ID using:
    ```bash
    tig
    ```
12. Add a new git tag:
    ```bash
    git tag v0.1.2 ec6e1f08c65e489b7a79e01597855ec218d1fe5e
    ```
13. Push the tag to the remote:
    ```bash
    git push origin v0.1.2
    ```
14. Publish to npm:
    ```bash
    npm publish
    ```

---

## Auto

1. Run this workflow:
   [manual-version-bump.yml](https://github.com/sanemat/browser-nano-css/actions/workflows/manual-version-bump.yml)
2. Check and edit the pull request if needed
3. Merge the pull request
4. This will start this workflow:
   [push-tag-and-release.yml](https://github.com/sanemat/browser-nano-css/actions/workflows/push-tag-and-release.yml)

---

## If you already pushed a git tag

Use this workflow to make a release:
[manual-release.yml](https://github.com/sanemat/browser-nano-css/actions/workflows/manual-release.yml)

