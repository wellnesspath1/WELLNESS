The Wellness Path — local workspace

Changes made to fix GitHub Pages build:

- Added a `docs/` site root containing HTML pages and `assets` so the Jekyll Pages action can find the source.
- Fixed incorrect script filename in `index.html` (script.js → scripts.js).
- Added `assets/css/style.scss` + `style.css` so Jekyll's SCSS converter has the expected file.

How to push these changes (use your own Git credentials):

Open PowerShell in the project root and run:

```powershell
git add docs README.md
git add index.html styles.css scripts.js
git commit -m "chore: provide docs site root and fix asset paths for Pages build"
git push origin master
```

After pushing, check Actions/Pages in GitHub — the jekyll-build-pages action should be able to find `docs` and complete.

If you prefer using the repository root for Pages (no `docs` folder), edit your GitHub workflow or Pages settings to use the repository root instead of `./docs`. I can prepare the exact workflow change if you provide the YAML file or allow me to propose it.
